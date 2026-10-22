"use client";

import { useState } from "react";

export default function FormularioAlumno() {
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMensaje("Alumno agregado");
  }

  return (
    <section>
      <h2>Agrega alumno:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre de alumno:</label>
        <input id="nombre" name="nombre" />

        <label htmlFor="apellido">Apellido de alumno:</label>
        <input id="apellido" name="apellido" />

        <label htmlFor="carrera">Carrera de alumno:</label>
        <input id="carrera" name="carrera" />

        <label htmlFor="estatus">Estatus de alumno:</label>
        <input id="estatus" name="estatus" />

        <label htmlFor="calificacion">Calificación de alumno:</label>
        <input id="calificacion" name="calificacion" />

        <button type="submit">Agregar</button>
      </form>
      <p aria-live="polite">{mensaje}</p>
    </section>
  );
}
