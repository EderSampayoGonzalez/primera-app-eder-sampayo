import AlumnoRow from "./AlumnoRow";

export default function TablaAlumnos({ id, titulo, alumnos }) {
  return (
    <section>
      <h2>{titulo}</h2>
      <table id={id}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Carrera</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <AlumnoRow
              key={`${alumno.nombre}-${alumno.apellido}`}
              alumno={alumno}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
