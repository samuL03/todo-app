import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Todos from './pages/Todos'
import Registro from './pages/Registro'

export default function App(){
  return (
    <div className="app-container">
      <header>
        <h1>todo-app</h1>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/todos">Todos</NavLink>
          <NavLink to="/registro">Registro</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/todos" element={<Todos/>} />
          <Route path="/registro" element={<Registro/>} />
        </Routes>
      </main>
    </div>
  )
}
