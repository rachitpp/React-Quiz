import { useQuestion } from "../Context/context";

const Progress = () => {
  const { questions, QuestionNo, Points, answer, TotalMarks } = useQuestion();
  return (
    <div className="progress">
      <progress
        max={questions.length}
        value={QuestionNo + Number(answer !== null)}
      />
      <div>
        Question <strong>{QuestionNo + 1}</strong>/{questions.length}{" "}
      </div>
      <div>
        {Points}/{TotalMarks}
      </div>
    </div>
  );
};

export default Progress;
