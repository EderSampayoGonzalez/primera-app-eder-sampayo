"use client";

import { useState } from "react";

export default function Home() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    carrera: "",
  });
  const [alumnos, setAlumnos] = useState([]);

  function manejarCambio(event) {
    const { name, value } = event.target;
    setFormulario((formularioActual) => ({
      ...formularioActual,
      [name]: value,
    }));
  }

  function agregarAlumno(event) {
    event.preventDefault();

    if (!formulario.nombre.trim() || !formulario.apellido.trim() || !formulario.carrera.trim()) {
      return;
    }

    setAlumnos((alumnosActuales) => [
      ...alumnosActuales,
      { id: crypto.randomUUID(), ...formulario },
    ]);
    setFormulario({ nombre: "", apellido: "", carrera: "" });
  }

  return (
    <main className="pagina-alumnos">
      <header>
        <p className="subtitulo">Registro académico</p>
        <h1>Alumnos</h1>
      </header>

      <form onSubmit={agregarAlumno} className="formulario-alumno">
        <h2>Agregar alumno</h2>
        <label htmlFor="nombre">
          Nombre
          <input type="text" id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} required />
        </label>
        <label htmlFor="apellido">
          Apellido
          <input type="text" id="apellido" name="apellido" value={formulario.apellido} onChange={manejarCambio} required />
        </label>
        <label className="campo-carrera" htmlFor="carrera">
          Carrera
          <input type="text" id="carrera" name="carrera" value={formulario.carrera} onChange={manejarCambio} required />
        </label>
        <button type="submit">
          Agregar alumno
        </button>
      </form>

      <section className="lista-alumnos">
        <div className="lista-cabecera">
          <h2>Lista de alumnos</h2>
        </div>
        {alumnos.length === 0 ? (
          <p className="lista-vacia">Todavía no hay alumnos registrados.</p>
        ) : (
          <div className="tabla-contenedor">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Carrera</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno) => (
                  <tr key={alumno.id}>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.apellido}</td>
                    <td>{alumno.carrera}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
