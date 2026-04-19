function QuestionPalette({ context }) {
  const { examState, setExamState } = context;

  return (
    <div className="question-grid">
      {examState.questions.map((_, index) => {
        const classes = ["question-chip"];

        if (index === examState.currentIndex) {
          classes.push("current");
        }

        if (examState.answers[index] !== null) {
          classes.push("answered");
        }

        if (examState.reviewFlags[index]) {
          classes.push("review");
        }

        return (
          <button
            key={index}
            className={classes.join(" ")}
            onClick={() =>
              setExamState((current) => ({
                ...current,
                currentIndex: index,
              }))
            }
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default QuestionPalette;
