import { useState } from 'react'

export default function Registro(){
  const [form, setForm] = useState({ nombre:'', email:'', password:'' })
  const [registrado, setRegistrado] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos enviados:', form)        // evidencia en consola
    setRegistrado(form)                         // mostrar en interfaz
    setForm({ nombre:'', email:'', password:'' })
  }

  return (
    <div className="page-container">
      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input name="email" placeholder="Correo" value={form.email} onChange={handleChange} required />
        <input name="password" placeholder="Contraseña" type="password" value={form.password} onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>

      {registrado && (
        <section style={{marginTop:16}}>
          <h3>Datos registrados</h3>
          <p><strong>Nombre:</strong> {registrado.nombre}</p>
          <p><strong>Email:</strong> {registrado.email}</p>
        </section>
      )}
    </div>
  )
}
