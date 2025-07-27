import { useState } from "react";
import "./App.css";
import InputContainer from "./Components/inputcontainer";
import TodoContainer from "./Components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  function writeTodo(e) {
    console.log(setInputVal(e.target.value));
  }
  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }
  function deleteTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i != index));
  }
  console.log(todos);
  return (
    <main className="app">
      <h1 className="title">📝 To-Do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
