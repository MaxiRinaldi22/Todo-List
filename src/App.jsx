import { TodosWrapper } from "./components/TodosWrapper";
import "./App.css";

function App() {
  return (
    <main>
      <section className="container-main">
        <h1 className="title">To Do</h1>
        <TodosWrapper />
      </section>
    </main>
  );
}

export default App;
