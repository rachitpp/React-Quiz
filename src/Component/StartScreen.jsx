import { useQuestion } from "../Context/context";

const StartScreen = () => {
  const { questions, HandleClick } = useQuestion();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questions.length} questions to test your React mastery</h3>
      <button className="btn" onClick={HandleClick}>
        Let&apos;s Start
      </button>
    </div>
  );
};

export default StartScreen;
