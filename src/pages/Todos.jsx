import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Todos(){
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
        setTodos(res.data)
      } catch (err){
        setError('Error al obtener todos')
      } finally {
        setLoading(false)
      }
    }
    fetchTodos()
  }, [])

  const createTodo = async () => {
    if (!input.trim()) return
    const nuevo = { title: input, completed: false, userId: 1 }
    try {
      // usamos la API placeholder (no persiste verdaderamente) pero simula respuesta:
      const res = await axios.post('https://jsonplaceholder.typicode.com/todos', nuevo)
      console.log('Todo creado:', res.data)
      setTodos(prev => [...prev, { ...res.data, id: Date.now() }])
      setInput('')
    } catch {
      setError('No se pudo crear el todo')
    }
  }

  const toggleTodo = async (id) => {
    const t = todos.find(x=>x.id===id)
    if (!t) return
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { ...t, completed: !t.completed })
    } catch {}
    setTodos(prev => prev.map(x => x.id===id ? { ...x, completed: !x.completed } : x))
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    } catch {}
    setTodos(prev => prev.filter(x => x.id !== id))
  }

  return (
    <div className="page-container">
      <h2>Todos</h2>

      <div style={{marginBottom:12}}>
        <input placeholder="Nueva tarea..." value={input} onChange={e=>setInput(e.target.value)} />
        <button onClick={createTodo}>Agregar</button>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}

      <ul style={{listStyle:'none', padding:0}}>
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <label style={{display:'flex',alignItems:'center',gap:8}}>
              <input type="checkbox" checked={!!todo.completed} onChange={()=>toggleTodo(todo.id)} />
              <span>{todo.title}</span>
            </label>
            <div>
              <button onClick={()=>deleteTodo(todo.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
