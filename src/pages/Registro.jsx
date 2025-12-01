export default function Registro() {
  return (
    <div>
      <h1>Registro</h1>
      <p>Registra nuevos usuarios o información relevante.</p>

      <form className="form">
        <label>Nombre</label>
        <input type="text" placeholder="Tu nombre" />

        <label>Correo</label>
        <input type="email" placeholder="ejemplo@mail.com" />

        <label>Contraseña</label>
        <input type="password" placeholder="******" />

        <button>Registrar</button>
      </form>
    </div>
  );
}
