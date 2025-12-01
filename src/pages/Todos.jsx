import { useState } from 'react'
import { createTodo } from '../services/api'
import { useNavigate } from 'react-router-dom'


export default function Registro(){
const [title, setTitle] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const navigate = useNavigate()


const handleSubmit = async (e) => {
e.preventDefault()
if (!title.trim()) {
setError('El título es obligatorio')
return
}
setLoading(true)
setError(null)
try {
const res = await createTodo({ title, completed: false, userId: 1 })
console.log('Todo creado:', res.data)
// redirigir a /todos
navigate('/todos')
} catch (err) {
setError('No se pudo crear el todo')
} finally {
setLoading(false)
}
}


return (
<div>
<h1>Crear Todo</h1>
<form onSubmit={handleSubmit}>
<label>
Título
<input value={title} onChange={e => setTitle(e.target.value)} />
</label>
{error && <p style={{color:'red'}}>{error}</p>}
<button type="submit" disabled={loading}>{loading ? 'Creando...' : 'Crear'}</button> 
</form> 
</div> 
)
}