import QuestionPalette from "./QuestionPalette";

function Sidebar({ context }) {
  const { session, questionBank, examState } = context;

  if (context.isAdmin) {
    const totalAttempts = context.history.length;
    const averageScore = totalAttempts
      ? Math.round(
          context.history.reduce((total, item) => total + item.score, 0) / totalAttempts
        )
      : 0;

    return (
      <aside className="sidebar">
        <div className="brand-card">
          <div className="brand-badge">ADMIN</div>
          <p className="eyebrow">Control Room</p>
          <h1>Math Arena</h1>
        </div>

        <section className="panel timer-panel">
          <div className="panel-header">
            <p className="eyebrow">Administration</p>
            <h2>Overview</h2>
          </div>
          <div className="timer-display">{context.users.length}</div>
          <div className="timer-meta">
            <div>
              <span className="meta-label">Registered Students</span>
              <strong>{context.users.length}</strong>
            </div>
            <div>
              <span className="meta-label">Average Score</span>
              <strong>{averageScore}%</strong>
            </div>
          </div>
        </section>

        <section className="panel compact-panel">
          <div className="panel-header">
            <p className="eyebrow">Coach</p>
            <h2>Session</h2>
          </div>
          <div className="session-line">
            <span className="meta-label">Logged In As</span>
            <strong>{session?.displayName || "-"}</strong>
          </div>
          <div className="session-line">
            <span className="meta-label">Attempts Recorded</span>
            <strong>{totalAttempts}</strong>
          </div>
        </section>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <div className="brand-card">
        <div className="brand-badge">CBT</div>
        <p className="eyebrow">Live Session</p>
        <h1>Math Arena</h1>
      </div>

      <section className="panel timer-panel">
        <div className="panel-header">
          <p className="eyebrow">Exam Timer</p>
          <h2>Time Left</h2>
        </div>
        <div className="timer-display">{formatTime(examState.timeLeft)}</div>
        <div className="timer-meta">
          <div>
            <span className="meta-label">Candidate</span>
            <strong>{session?.displayName || "-"}</strong>
          </div>
          <div>
            <span className="meta-label">Questions</span>
            <strong>{examState.questions.length}</strong>
          </div>
        </div>
      </section>

      <section className="panel compact-panel">
        <div className="panel-header">
          <p className="eyebrow">Candidate</p>
          <h2>Session</h2>
        </div>
        <div className="session-line">
          <span className="meta-label">Role</span>
          <strong>{session?.role === "admin" ? "Admin / Coach" : "Student"}</strong>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <p className="eyebrow">Navigator</p>
          <h2>Question Palette</h2>
        </div>

        <div className="legend">
          <span><i className="dot current"></i>Current</span>
          <span><i className="dot answered"></i>Answered</span>
          <span><i className="dot review"></i>Review</span>
          <span><i className="dot idle"></i>Unseen</span>
        </div>

        <QuestionPalette context={context} />
      </section>
    </aside>
  );
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default Sidebar;
