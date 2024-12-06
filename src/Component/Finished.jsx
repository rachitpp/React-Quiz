import { useQuestion } from "../Context/context";

const Finished = () => {
  const { Points, TotalMarks, HandleRestart } = useQuestion();
  const percentage = (Points / TotalMarks) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🎉";
  if (percentage >= 0 && percentage < 50) emoji = "🎉";
  if (percentage === 0) emoji = "🤡";
  return (
    <>
      <p className="result">
        {emoji} You scored <strong> {Points} </strong> out of {TotalMarks} (
        {Math.round(percentage)}%)
      </p>
      <button className="btn btn-ui" onClick={HandleRestart}>
        Restart
      </button>
    </>
  );
};

export default Finished;
