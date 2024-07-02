import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const API_LINK = "https://jsonplaceholder.typicode.com/todos";

export default function TodosContainer() {
  const [todos, setTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("true");

  const cachedAddNumbers = useCallback((a, b) => a + b, []);

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(API_LINK)
      .then((response) => setTodos(response.data))
      .catch((err) => alert(err.message));
    cachedAddNumbers(2, 4);
  }, [cachedAddNumbers]);

  function sortTodos() {
    if (selectedOption === "true") {
      return todos.sort((a, b) => b.completed - a.completed);
    } else {
      return todos.sort((a, b) => a.completed - b.completed);
    }
  }

  const sortedTodos = useMemo(sortTodos, [todos, selectedOption]);

  return (
    <div>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        <option value={true}>Completed on Top</option>
        <option value={false}>Not Completed on Top</option>
      </select>
      {sortedTodos.map((todo) => (
        <div key={todo.id}>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed.toString()}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
