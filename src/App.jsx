import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Registro from "./pages/Registro";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Todo App</h2>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/todos">Listado</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>
    </div>
  );
}
