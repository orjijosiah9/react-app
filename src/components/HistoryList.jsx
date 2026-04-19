function HistoryList({ context }) {
  const visibleHistory = context.history.filter((entry) => {
    return context.isAdmin || entry.displayName === context.session?.displayName;
  });

  if (!visibleHistory.length) {
    return (
      <div className="history-item">
        <strong>No attempts yet</strong>
        <span>Your completed tests will appear here.</span>
      </div>
    );
  }

  return (
    <div className="history-list">
      {visibleHistory.slice(0, 6).map((entry, index) => (
        <div
          className="history-item"
          key={`${entry.displayName}-${entry.completedAt}-${index}`}
        >
          <strong>
            {entry.displayName} - {entry.score}%
          </strong>
          <span>{entry.title}</span>
          <span>
            {entry.correct}/{entry.total} correct | {entry.completedAt}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HistoryList;
