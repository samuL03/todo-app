import { useEffect, useState } from 'react'
import { getTodos, deleteTodo, updateTodo } from '../services/api'
import TodosList from '../components/TodosList'


export default function Todos() {
const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
const fetchTodos = async () => {
setLoading(true)
setError(null)
try {
const res = await getTodos()
setTodos(res.data)
} catch (err) {
setError('Error al obtener todos')
} finally {
setLoading(false)
}
}


fetchTodos()
}, [])


const handleToggle = async (id) => {
const target = todos.find(t => t.id === id)
try {
await updateTodo(id, { ...target, completed: !target.completed })
setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
} catch (err) {
setError('No se pudo actualizar el todo')
}
}


const handleDelete = async (id) => {
try {
await deleteTodo(id)
setTodos(todos.filter(t => t.id !== id))
} catch (err) {
setError('No se pudo eliminar el todo')
}
}


return (
<div>
<h1>Todos</h1>
{loading && <p>Cargando...</p>}
{error && <p style={{color:'red'}}>{error}</p>}
{!loading && !error && <TodosList todos={todos} onToggle={handleToggle} onDelete={handleDelete}/>}
</div>
)
}