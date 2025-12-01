import TodoItem from './TodoItem'


export default function TodosList({ todos = [], onToggle, onDelete }){
if (!todos.length) return <p>No hay todos.</p>
return (
<ul>
{todos.map(todo => (
<TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
))}
</ul>
)
}