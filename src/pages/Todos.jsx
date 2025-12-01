import { useState } from "react";
import TodoItem from "../components/TodoItem";

export default function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const agregar = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const eliminar = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Tus Tareas</h1>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={agregar}>Agregar</button>
      </div>

      <ul className="todo-list">
        {todos.map((t, i) => (
          <TodoItem key={i} texto={t} eliminar={() => eliminar(i)} />
        ))}
      </ul>
    </div>
  );
}
