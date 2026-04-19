import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import AdminUploadPage from "./pages/AdminUploadPage";
import ResultsPage from "./pages/ResultsPage";
import AppShell from "./components/AppShell";
import { defaultExamSettings, defaultQuestions, JUNIOR_CLASSES } from "./data/defaultQuestions";
import {
  authenticateAdmin,
  authenticateStudent,
  clearStoredSession,
  deleteStudent,
  deleteStudentHistory,
  loadHistory,
  loadQuestionPools,
  loadSession,
  loadUsers,
  registerStudent,
  saveQuestionPools,
  saveHistoryEntry,
  saveSession
} from "./utils/storage";

function App() {
  const [theme, setTheme] = useState("day");
  const [session, setSession] = useState(() => loadSession());
  const [history, setHistory] = useState(() => loadHistory());
  const [users, setUsers] = useState(() => loadUsers());
  const [questionPools, setQuestionPools] = useState(() => loadQuestionPools());
  const currentQuestionBank = getQuestionBankForSession(session, questionPools);
  const [examState, setExamState] = useState(() => createExamState(getQuestionBankForSession(null, loadQuestionPools())));

  const isAdmin = session?.role === "admin";

  useEffect(() => {
    document.body.classList.toggle("theme-night", theme === "night");
  }, [theme]);

  const appContext = useMemo(
    () => ({
      session,
      isAdmin,
      users,
      history,
      questionBank: currentQuestionBank,
      questionPools,
      examState,
      setExamState,
      onLogout: () => {
        clearStoredSession();
        setSession(null);
      },
      onToggleTheme: () => setTheme((value) => (value === "day" ? "night" : "day")),
      onSaveQuestionSet: ({ poolKey, config }) => {
        const nextPools = {
          ...questionPools,
          [poolKey]: config,
        };
        saveQuestionPools(nextPools);
        setQuestionPools(nextPools);
        if (!isAdmin && getPoolKeyForClass(session?.group) === poolKey) {
          setExamState(createExamState(config));
        }
      },
      onResetExam: () => {
        setExamState(createExamState(currentQuestionBank));
      },
      onRestoreDefaults: (poolKey) => {
        const restoredPool = {
          title: poolKey === "junior" ? "JSS Mathematics Mock" : "SS Mathematics Mock",
          durationMinutes: defaultExamSettings.durationMinutes,
          questions: defaultQuestions
        };
        const nextPools = {
          ...questionPools,
          [poolKey]: restoredPool,
        };
        saveQuestionPools(nextPools);
        setQuestionPools(nextPools);
        if (!isAdmin && getPoolKeyForClass(session?.group) === poolKey) {
          setExamState(createExamState(restoredPool));
        }
      },
      onSaveResult: (result) => {
        if (!session) {
          return;
        }

        const entry = {
          ...result,
          displayName: session.displayName,
          studentEmail: session.email,
          group: session.group,
          poolKey: getPoolKeyForClass(session.group),
          role: session.role,
          completedAt: new Date().toLocaleString()
        };

        const nextHistory = saveHistoryEntry(entry);
        setHistory(nextHistory);
      },
      onAdminCreateStudent: (payload) => {
        registerStudent(payload);
        setUsers(loadUsers());
      },
      onAdminRemoveStudent: (email) => {
        const nextUsers = deleteStudent(email);
        const nextHistory = deleteStudentHistory(email);
        setUsers(nextUsers);
        setHistory(nextHistory);
      }
    }),
    [session, isAdmin, users, history, questionPools, currentQuestionBank, examState]
  );

  const handleStudentLogin = (email, password) => {
    const payload = authenticateStudent(email, password);
    saveSession(payload);
    setSession(payload);
    setExamState(createExamState(getQuestionBankForSession(payload, questionPools)));
    return { ok: true };
  };

  const handleRegister = (payload) => {
    registerStudent(payload);
    setUsers(loadUsers());
    return { ok: true };
  };

  const handleAdminLogin = (email, password) => {
    const payload = authenticateAdmin(email, password);
    saveSession(payload);
    setSession(payload);
    return { ok: true };
  };

  return (
    <Routes>
      <Route
        path="/register"
        element={session ? <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace /> : <RegisterPage onRegister={handleRegister} />}
      />
      <Route
        path="/login"
        element={session ? <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace /> : <LoginPage onLogin={handleStudentLogin} />}
      />
      <Route
        path="/admin-login"
        element={session ? <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace /> : <AdminLoginPage onLogin={handleAdminLogin} />}
      />
      <Route
        path="/"
        element={<Navigate to={session ? (session.role === "admin" ? "/admin" : "/dashboard") : "/login"} replace />}
      />
      <Route
        path="/dashboard"
        element={
          <StudentRoute session={session}>
            <AppShell context={appContext}>
              <StudentDashboardPage context={appContext} />
            </AppShell>
          </StudentRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminRoute session={session}>
            <AppShell context={appContext}>
              <AdminUploadPage context={appContext} />
            </AppShell>
          </AdminRoute>
        }
      />
      <Route
        path="/results"
        element={
          <StudentRoute session={session}>
            <AppShell context={appContext}>
              <ResultsPage context={appContext} />
            </AppShell>
          </StudentRoute>
        }
      />
    </Routes>
  );
}

function createExamState(questionBank) {
  const sessionQuestions = buildSessionQuestions(questionBank.questions, 60);

  return {
    title: questionBank.title,
    durationMinutes: questionBank.durationMinutes,
    questions: sessionQuestions,
    currentIndex: 0,
    answers: Array(sessionQuestions.length).fill(null),
    reviewFlags: Array(sessionQuestions.length).fill(false),
    submitted: false,
    timeLeft: questionBank.durationMinutes * 60,
    lastResult: null
  };
}

function getQuestionBankForSession(session, questionPools) {
  if (!questionPools?.junior || !questionPools?.senior) {
    return {
      title: defaultExamSettings.title,
      durationMinutes: defaultExamSettings.durationMinutes,
      questions: defaultQuestions,
    };
  }

  const poolKey = getPoolKeyForClass(session?.group);
  return questionPools[poolKey];
}

function getPoolKeyForClass(classLevel) {
  return JUNIOR_CLASSES.includes(classLevel) ? "junior" : "senior";
}

function buildSessionQuestions(questions, limit) {
  if (!Array.isArray(questions)) {
    return [];
  }

  const shuffled = [...questions];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, Math.min(limit, shuffled.length));
}

function ProtectedRoute({ session, children }) {
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function StudentRoute({ session, children }) {
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (session.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

function AdminRoute({ session, children }) {
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (session.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default App;
