export default function AlumnoRow({ alumno }) {
  return (
    <tr>
      <td>
        <div className="flexbox flex-row">
          <span>{alumno.nombre}</span>
        </div>
      </td>
      <td>{alumno.apellido}</td>
      <td>{alumno.carrera}</td>
      <td>{alumno.calificacion}</td>
    </tr>
  );
}
