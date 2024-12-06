import Error from "../Component/Error";
import Finished from "../Component/Finished";
import Loader from "../Component/Loader";
import Questions from "../Component/Questions";
import StartScreen from "../Component/StartScreen";
import { useQuestion } from "../Context/context";

const Quiz = () => {
  const { questions, statusState } = useQuestion();
  console.log(questions);
  return (
    <div>
      {statusState === "loading" && <Loader />}
      {statusState === "error" && <Error />}
      {statusState === "ready" && <StartScreen />}
      {statusState === "active" && <Questions />}
      {statusState === "finished" && <Finished />}
    </div>
  );
};

export default Quiz;
