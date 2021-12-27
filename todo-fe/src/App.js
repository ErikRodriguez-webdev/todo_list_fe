import { useState, useEffect } from "react";
import TodoCard from "./TodoCard.js";
import "./App.css";

function App() {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      todo: "Workout",
    },
    {
      id: 2,
      todo: "Eat healthy",
    },
    {
      id: 3,
      todo: "Solve daily leetcode",
    },
    {
      id: 4,
      todo: "Work on project",
    },
  ]);
  let [todoInput, setTodoInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(todoInput);
    setTodoData([
      ...todoData,
      {
        id: 54,
        todo: todoInput,
      },
    ]);

    setTodoInput("");
  }

  function handleChange(event) {
    setTodoInput(event.target.value);
  }

  function removeTodo(id) {
    setTodoData(todoData.filter((card) => card.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todoInput"
          value={todoInput}
          onChange={(e) => handleChange(e)}
          placeholder="ex: Walk my dog"
          autoComplete="off"
        />

        <button type="submit" disabled={todoInput.length < 2 && true}>
          Create Todo
        </button>
      </form>

      <section>
        {todoData.map((card) => (
          <TodoCard key={card.id} card={card} removeTodo={removeTodo} />
        ))}
      </section>
    </div>
  );
}

export default App;
