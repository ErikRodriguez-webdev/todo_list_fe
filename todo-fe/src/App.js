import { useState, useEffect } from "react";
import TodoCard from "./TodoCard.js";
import axios from "axios";
import "./App.css";

function App() {
  const [todoData, setTodoData] = useState([]);
  let [todoInput, setTodoInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("https://tl-be.herokuapp.com/todo/", { todo: todoInput })
      .then((response) => {
        console.log(response);

        setTodoData([...todoData, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });

    setTodoInput("");
  }

  function handleChange(event) {
    setTodoInput(event.target.value);
  }

  function removeTodo(id) {
    axios
      .delete(`https://tl-be.herokuapp.com/todo/${id}`)
      .then((response) => {
        setTodoData(todoData.filter((card) => card.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log("fetch");
    axios
      .get("https://tl-be.herokuapp.com/todo/")
      .then((response) => {
        setTodoData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

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
