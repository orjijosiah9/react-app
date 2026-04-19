import { useEffect } from "react";

export function useExamEngine(examState, setExamState, onSaveResult, studentName) {
  useEffect(() => {
    if (examState.submitted) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setExamState((current) => {
        if (current.submitted) {
          return current;
        }

        if (current.timeLeft <= 1) {
          return submitCurrentExam(current, onSaveResult, studentName);
        }

        return {
          ...current,
          timeLeft: current.timeLeft - 1,
        };
      });
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [examState.submitted, setExamState, onSaveResult, studentName]);
}

export function submitCurrentExam(current, onSaveResult, studentName) {
  const correct = current.answers.reduce((total, answer, index) => {
    return total + (answer === current.questions[index].answer ? 1 : 0);
  }, 0);

  const attempted = current.answers.filter((answer) => answer !== null).length;
  const flagged = current.reviewFlags.filter(Boolean).length;
  const score = Math.round((correct / current.questions.length) * 100);

  const lastResult = {
    title: current.title,
    score,
    correct,
    attempted,
    flagged,
    total: current.questions.length,
    studentName,
  };

  onSaveResult(lastResult);

  return {
    ...current,
    submitted: true,
    lastResult,
  };
}
