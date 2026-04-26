import { useState } from "react";

function QuestionCard({ context, onSubmit }) {
  const { examState, setExamState } = context;
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const question = examState.questions[examState.currentIndex];

  if (!question) {
    return null;
  }

  const answeredCount = examState.answers.filter((answer) => answer !== null).length;

  return (
    <>
      <section className="status-strip">
        <div className="status-card">
          <span className="status-label">Current Question</span>
          <strong>
            {examState.currentIndex + 1} of {examState.questions.length}
          </strong>
        </div>

        <div className="status-card">
          <span className="status-label">Answered</span>
          <strong>{answeredCount}</strong>
        </div>
      </section>

      <section className="exam-card">
        <div className="question-header">
          <div>
            <p className="eyebrow">Question Prompt</p>
            <h3>Question {examState.currentIndex + 1}</h3>
          </div>
          <button
            className="primary-button"
            onClick={() => setShowSubmitConfirm(true)}
            disabled={examState.submitted}
          >
            Submit Test
          </button>
        </div>

        <article className="question-body">
          <p>{question.text}</p>
        </article>

        <section className="option-list" aria-label="Answer options">
          {question.options.map((option, index) => {
            const selected = examState.answers[examState.currentIndex] === index;

            return (
              <label className={`option-card ${selected ? "selected" : ""}`} key={index}>
                <input
                  type="radio"
                  checked={selected}
                  disabled={examState.submitted}
                  onChange={() =>
                    setExamState((current) => {
                      if (current.submitted) return current;

                      const nextAnswers = [...current.answers];
                      nextAnswers[current.currentIndex] = index;

                      return {
                        ...current,
                        answers: nextAnswers,
                      };
                    })
                  }
                />
                <span className="option-badge">{String.fromCharCode(65 + index)}</span>
                <span>{option}</span>
              </label>
            );
          })}
        </section>

        <div className="exam-actions">
          <button
            className="ghost-button"
            onClick={() =>
              setExamState((current) => ({
                ...current,
                currentIndex: Math.max(0, current.currentIndex - 1),
              }))
            }
          >
            Previous
          </button>

          <div className="action-group">
            <button
              className="ghost-button"
              onClick={() =>
                setExamState((current) => {
                  if (current.submitted) return current;

                  const nextAnswers = [...current.answers];
                  nextAnswers[current.currentIndex] = null;

                  return {
                    ...current,
                    answers: nextAnswers,
                  };
                })
              }
            >
              Clear Answer
            </button>

            <button
              className="primary-button"
              onClick={() =>
                setExamState((current) => ({
                  ...current,
                  currentIndex: Math.min(
                    current.questions.length - 1,
                    current.currentIndex + 1
                  ),
                }))
              }
            >
              Next Question
            </button>
          </div>
        </div>
      </section>

      {showSubmitConfirm ? (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="submit-modal-title">
          <div className="confirm-card">
            <p className="eyebrow">Confirm Submission</p>
            <h2 id="submit-modal-title">Are you sure you want to submit?</h2>
            <p className="panel-copy">
              Once you submit, your answers will be scored immediately.
            </p>
            <div className="confirm-actions">
              <button className="ghost-button" onClick={() => setShowSubmitConfirm(false)}>
                No
              </button>
              <button
                className="primary-button"
                onClick={() => {
                  setShowSubmitConfirm(false);
                  onSubmit();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default QuestionCard;
