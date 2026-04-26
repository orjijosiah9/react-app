import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import AdminUploadPage from "./pages/AdminUploadPage";
import ResultsPage from "./pages/ResultsPage";
import AppShell from "./components/AppShell";
import BrandSignature from "./components/BrandSignature";
import {
  defaultExamSettings,
  defaultJuniorQuestions,
  defaultQuestions,
  JUNIOR_CLASSES,
} from "./data/defaultQuestions";
import { supabase } from "./lib/supabase";
import {
  authenticateAdmin,
  authenticateStudent,
  bootstrapAppData,
  clearStoredSession,
  createStudentFromAdmin,
  deleteStudent,
  loadUsers,
  registerStudent,
  saveHistoryEntry,
  saveQuestionPools,
} from "./utils/storage";

function App() {
  const [theme, setTheme] = useState("day");
  const [loading, setLoading] = useState(true);
  const [appError, setAppError] = useState("");
  const [session, setSession] = useState(null);
  const [history, setHistory] = useState([]);
  const [users, setUsers] = useState([]);
  const [questionPools, setQuestionPools] = useState(createDefaultQuestionPools());
  const currentQuestionBank = getQuestionBankForSession(session, questionPools);
  const [examState, setExamState] = useState(() =>
    createExamState(getQuestionBankForSession(null, createDefaultQuestionPools()))
  );

  const isAdmin = session?.role === "admin";

  useEffect(() => {
    document.body.classList.toggle("theme-night", theme === "night");
  }, [theme]);

  useEffect(() => {
    let active = true;

    const syncFromAuth = async (authSession) => {
      try {
        if (active) {
          setLoading(true);
          setAppError("");
        }

        const data = await bootstrapAppData(authSession);

        if (!active) {
          return;
        }

        setSession(data.session);
        setUsers(data.users);
        setHistory(data.history);
        setQuestionPools(data.questionPools);

        const nextBank = getQuestionBankForSession(data.session, data.questionPools);
        setExamState(createExamState(nextBank));
      } catch (error) {
        if (
          active &&
          authSession?.user &&
          error instanceof Error &&
          error.message === "No profile was found for this account."
        ) {
          await supabase.auth.signOut();
          setSession(null);
          setUsers([]);
          setHistory([]);
          setQuestionPools(createDefaultQuestionPools());
          setExamState(
            createExamState(
              getQuestionBankForSession(null, createDefaultQuestionPools())
            )
          );
          setLoading(false);
          return;
        }

        if (active) {
          setAppError(error.message);
          setSession(null);
          setUsers([]);
          setHistory([]);
          setQuestionPools(createDefaultQuestionPools());
          setExamState(createExamState(getQuestionBankForSession(null, createDefaultQuestionPools())));
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    supabase.auth.getSession().then(({ data }) => {
      syncFromAuth(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, authSession) => {
      syncFromAuth(authSession);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

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
      onLogout: async () => {
        await clearStoredSession();
      },
      onToggleTheme: () => setTheme((value) => (value === "day" ? "night" : "day")),
      onSaveQuestionSet: async ({ poolKey, config }) => {
        const nextPools = {
          ...questionPools,
          [poolKey]: config,
        };
        await saveQuestionPools(nextPools);
        setQuestionPools(nextPools);

        if (!isAdmin && getPoolKeyForClass(session?.group) === poolKey) {
          setExamState(createExamState(config));
        }
      },
      onResetExam: () => {
        setExamState(createExamState(currentQuestionBank));
      },
      onRestoreDefaults: async (poolKey) => {
        const restoredPool =
          poolKey === "junior"
            ? {
                title: "JSS Mathematics Mock",
                durationMinutes: defaultExamSettings.durationMinutes,
                questions: defaultJuniorQuestions,
              }
            : {
                title: "SS Mathematics Mock",
                durationMinutes: defaultExamSettings.durationMinutes,
                questions: defaultQuestions,
              };

        const nextPools = {
          ...questionPools,
          [poolKey]: restoredPool,
        };

        await saveQuestionPools(nextPools);
        setQuestionPools(nextPools);

        if (!isAdmin && getPoolKeyForClass(session?.group) === poolKey) {
          setExamState(createExamState(restoredPool));
        }
      },
      onSaveResult: async (result) => {
        if (!session) {
          return;
        }

        try {
          const savedEntry = await saveHistoryEntry(session, {
            ...result,
            poolKey: getPoolKeyForClass(session.group),
          });

          setHistory((current) => [savedEntry, ...current].slice(0, 20));
        } catch (error) {
          console.error(error);
        }
      },
      onAdminCreateStudent: async (payload) => {
        await createStudentFromAdmin(payload);
        const nextUsers = await loadUsers();
        setUsers(nextUsers);
      },
      onAdminRemoveStudent: async (email) => {
        const nextUsers = await deleteStudent(email);
        setUsers(nextUsers);
        setHistory((current) => current.filter((entry) => entry.studentEmail !== email));
      },
    }),
    [session, isAdmin, users, history, questionPools, currentQuestionBank, examState]
  );

  const handleStudentLogin = async (email, password) => {
    const profile = await authenticateStudent(email, password);
    setSession(profile);
    setExamState(createExamState(getQuestionBankForSession(profile, questionPools)));
    return { ok: true };
  };

  const handleRegister = async (payload) => {
    await registerStudent(payload);
    return { ok: true };
  };

  const handleAdminLogin = async (email, password) => {
    const profile = await authenticateAdmin(email, password);
    setSession(profile);
    return { ok: true };
  };

  if (loading) {
    return (
      <div className="loading-shell">
        <div className="loading-orb loading-orb-left"></div>
        <div className="loading-orb loading-orb-right"></div>
        <section className="loading-card">
          <BrandSignature size="small" contextLabel="Powered by" title="Math Arena" />
          <p className="eyebrow">Initializing Session</p>
          <h1>Math Arena</h1>
          <p className="loading-copy">
            Preparing your live exam environment, syncing question pools, and loading your secure workspace.
          </p>

          <div className="loading-visual">
            <div className="loading-ring">
              <div className="loading-core"></div>
            </div>
            <div className="loading-pulse loading-pulse-one"></div>
            <div className="loading-pulse loading-pulse-two"></div>
          </div>

          <div className="loading-progress">
            <span className="loading-progress-bar"></span>
          </div>

          <div className="loading-meta">
            <div className="loading-stat">
              <span className="meta-label">Status</span>
              <strong>Connecting</strong>
            </div>
            <div className="loading-stat">
              <span className="meta-label">Mode</span>
              <strong>Live Sync</strong>
            </div>
            <div className="loading-stat">
              <span className="meta-label">Source</span>
              <strong>Supabase Cloud</strong>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (appError) {
    return (
      <div className="auth-shell">
        <section className="panel panel-page">
          <p className="eyebrow">Connection Error</p>
          <h2>Supabase setup needs attention</h2>
          <p className="form-error">{appError}</p>
          <p className="panel-copy">
            Check the SQL setup and confirm your Supabase project contains the required tables and policies.
          </p>
        </section>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/register"
        element={
          session ? (
            <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace />
          ) : (
            <RegisterPage onRegister={handleRegister} />
          )
        }
      />
      <Route
        path="/login"
        element={
          session ? (
            <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace />
          ) : (
            <LoginPage onLogin={handleStudentLogin} />
          )
        }
      />
      <Route
        path="/admin-login"
        element={
          session ? (
            <Navigate to={session.role === "admin" ? "/admin" : "/dashboard"} replace />
          ) : (
            <AdminLoginPage onLogin={handleAdminLogin} />
          )
        }
      />
      <Route
        path="/"
        element={
          <Navigate
            to={session ? (session.role === "admin" ? "/admin" : "/dashboard") : "/login"}
            replace
          />
        }
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
    lastResult: null,
  };
}

function getQuestionBankForSession(session, questionPools) {
  if (!questionPools?.junior || !questionPools?.senior) {
    return createDefaultQuestionPools().senior;
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

function createDefaultQuestionPools() {
  return {
    junior: {
      title: "JSS Mathematics Mock",
      durationMinutes: defaultExamSettings.durationMinutes,
      questions: defaultJuniorQuestions,
    },
    senior: {
      title: "SS Mathematics Mock",
      durationMinutes: defaultExamSettings.durationMinutes,
      questions: defaultQuestions,
    },
  };
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
