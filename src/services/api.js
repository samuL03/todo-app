import axios from 'axios'


const API_BASE = 'https://jsonplaceholder.typicode.com'


export const getTodos = () => axios.get(`${API_BASE}/todos?_limit=10`)
export const createTodo = (payload) => axios.post(`${API_BASE}/todos`, payload)
export const deleteTodo = (id) => axios.delete(`${API_BASE}/todos/${id}`)
export const updateTodo = (id, payload) => axios.put(`${API_BASE}/todos/${id}`, payload)