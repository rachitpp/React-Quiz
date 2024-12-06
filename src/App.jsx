// import DateCounter from "./DateCounter";
import { QuestionProvider } from "./Context/context";
import Header from "./Header/header";
import Quiz from "./MainComponent/Quiz";
function App() {
  return (
    <QuestionProvider>
      <div className="app">
        <Header />
        <Quiz />
      </div>
    </QuestionProvider>
  );
}

export default App;
