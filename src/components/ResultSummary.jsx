function ResultSummary({ result, onRestart, onReview }) {
  if (!result) {
    return null;
  }

  return (
    <section className="result-card">
      <p className="eyebrow">Performance Report</p>
      <h2>Your Practice Summary</h2>

      <div className="result-grid">
        <div>
          <span className="meta-label">Score</span>
          <strong>{result.score}%</strong>
        </div>
        <div>
          <span className="meta-label">Correct</span>
          <strong>{result.correct}</strong>
        </div>
        <div>
          <span className="meta-label">Attempted</span>
          <strong>{result.attempted}</strong>
        </div>
        <div>
          <span className="meta-label">Review Flags</span>
          <strong>{result.flagged}</strong>
        </div>
      </div>

      <div className="result-actions">
        <button className="ghost-button" onClick={onReview}>
          Review Answers
        </button>
        <button className="primary-button" onClick={onRestart}>
          Restart Test
        </button>
      </div>
    </section>
  );
}

export default ResultSummary;
