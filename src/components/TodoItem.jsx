export default function TodoItem({ texto, eliminar }) {
  return (
    <li className="todo-item">
      <span>{texto}</span>
      <button onClick={eliminar}>X</button>
    </li>
  );
}
