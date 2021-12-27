import "./App.css";

const TodoCard = (props) => {
  const { id, todo } = props.card;

  return (
    <div className="todoCard">
      <ul>
        <li onClick={() => props.removeTodo(id)}>❌</li>
      </ul>
      <p>{todo}</p>
    </div>
  );
};

export default TodoCard;
