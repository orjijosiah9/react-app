import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import ResultSummary from "../components/ResultSummary";
import { submitCurrentExam, useExamEngine } from "../hooks/useExamEngine";

function StudentDashboardPage({ context }) {
  const navigate = useNavigate();
  const { examState, setExamState, session, questionBank } = context;

  useEffect(() => {
    if (
      examState.title !== questionBank.title ||
      examState.durationMinutes !== questionBank.durationMinutes ||
      examState.questions.length === 0
    ) {
      setExamState(createSessionExamState(questionBank));
      return;
    }

    if (
      examState.title !== questionBank.title ||
      examState.durationMinutes !== questionBank.durationMinutes
    ) {
      setExamState(createSessionExamState(questionBank));
    }
  }, [examState, questionBank, setExamState]);

  useEffect(() => {
    if (examState.submitted && examState.lastResult) {
      navigate("/results");
    }
  }, [examState.submitted, examState.lastResult, navigate]);

  useExamEngine(examState, setExamState, context.onSaveResult, session?.displayName);

  const handleSubmit = () => {
    setExamState((current) =>
      submitCurrentExam(current, context.onSaveResult, session?.displayName)
    );
  };

  const handleRestart = () => {
    context.onResetExam();
    navigate("/dashboard");
  };

  return (
    <>
      <QuestionCard context={context} onSubmit={handleSubmit} />
      {examState.lastResult ? (
        <ResultSummary
          result={examState.lastResult}
          onRestart={handleRestart}
          onReview={() => navigate("/dashboard")}
        />
      ) : null}
    </>
  );
}

export default StudentDashboardPage;

function createSessionExamState(questionBank) {
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
