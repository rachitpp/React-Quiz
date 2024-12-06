import { useQuestion } from "../Context/context";

const Options = () => {
  const { questions, QuestionNo, HandleAnswerClick, answer } = useQuestion();
  return (
    <div className="options">
      {questions[QuestionNo].options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option
            ${answer !== null && index === answer ? "answer" : ""}
            ${
              answer !== null && index === questions[QuestionNo].correctOption
                ? "correct"
                : ""
            }
            ${
              answer !== null &&
              index !== questions[QuestionNo].correctOption &&
              index === answer
                ? "wrong"
                : ""
            }`}
          onClick={() => HandleAnswerClick(index)} // Changed from QuestionNo to index
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default Options;
