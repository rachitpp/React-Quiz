import { useQuestion } from "../Context/context";
import Options from "./Options";
import Progress from "./Progress";

const Questions = () => {
  const { questions, HandleQuestionNext, QuestionNo, answer } = useQuestion();
  return (
    <div>
      <Progress />
      <h4> {questions[QuestionNo].question}</h4>
      <Options />
      {answer !== null && (
        <button onClick={HandleQuestionNext} className="btn btn-ui">
          {QuestionNo !== questions.length - 1 ? "Next" : "Finish"}
        </button>
      )}
    </div>
  );
};

export default Questions;
