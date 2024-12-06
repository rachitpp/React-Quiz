import { createContext, useContext, useEffect, useReducer } from "react";

const QuestionContext = createContext();
const initialState = {
  questions: [],
  //   error,ready,active,finished,loading
  statusState: "loading",
  QuestionNo: 0,
  answer: null,
  Points: 0,
  // statusState
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, statusState: "ready" };
    case "dataFailed":
      return { ...state, statusState: "failed" };
    case "setActive":
      return { ...state, statusState: "active" };
    case "ChangeQuestion":
      return {
        ...state,
        QuestionNo: state.QuestionNo + 1,
        answer: null,
      };
    case "finishQuiz":
      return { ...state, statusState: "finished" };
    case "ClickAnswer": {
      const question = state.questions.at(state.QuestionNo);
      return {
        ...state,
        answer: action.payload,
        Points:
          action.payload === question.correctOption
            ? state.Points + question.points
            : state.Points,
      };
    }
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        statusState: "ready",
      };
    default:
      throw new Error("Unknown action");
  }
};

// eslint-disable-next-line react/prop-types
function QuestionProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    const GetQuestions = async () => {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch {
        dispatch({ type: "dataFailed" });
      }
    };
    GetQuestions();
  }, []);

  const HandleClick = () => {
    dispatch({ type: "setActive" });
  };
  const HandleRestart = () => {
    dispatch({ type: "restart" });
  };

  const HandleQuestionNext = () => {
    if (state.QuestionNo < state.questions.length - 1)
      dispatch({ type: "ChangeQuestion" });
    if (state.QuestionNo === state.questions.length - 1)
      dispatch({ type: "finishQuiz" });
  };
  const HandleAnswerClick = (id) => {
    dispatch({ type: "ClickAnswer", payload: id });
  };
  let TotalMarks = 0;
  for (let i = 0; i < state.questions.length; i++) {
    TotalMarks += state.questions[i].points;
  }
  return (
    <QuestionContext.Provider
      value={{
        questions: state.questions,
        statusState: state.statusState,
        dispatch,
        HandleClick,
        HandleQuestionNext,
        QuestionNo: state.QuestionNo,
        HandleAnswerClick,
        Points: state.Points,
        answer: state.answer,
        TotalMarks,
        HandleRestart,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (context === undefined)
    throw new Error("The context was used outside it's range");
  return context;
};
// eslint-disable-next-line react-refresh/only-export-components
export { QuestionProvider, useQuestion };
