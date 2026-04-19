import { useNavigate } from "react-router-dom";
import ResultSummary from "../components/ResultSummary";

function ResultsPage({ context }) {
  const navigate = useNavigate();
  const result = context.examState.lastResult;

  if (!result) {
    return (
      <section className="panel panel-page">
        <h2>No submission yet</h2>
        <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
      </section>
    );
  }

  return (
    <ResultSummary
      result={result}
      onRestart={() => {
        context.onResetExam();
        navigate("/dashboard");
      }}
      onReview={() => navigate("/dashboard")}
    />
  );
}

export default ResultsPage;
