import "./App.css";
import Todos from "./components/Todos/Todos";
import UpdateTodo from "./components/UpdateTodo/UpdateTodo";

function App() {
  return (
    <div>
      <UpdateTodo />
      <Todos />
    </div>
  );
}

export default App;
