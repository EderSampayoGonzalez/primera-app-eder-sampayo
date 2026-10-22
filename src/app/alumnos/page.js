import Link from "next/link";
import FormularioAlumno from "../../components/FormularioAlumno";
import TablaAlumnos from "../../components/TablaAlumnos";
import { alumnos } from "../../data/alumnos";

export default function AlumnosPage() {
  const alumnosPresentes = alumnos.filter(
    (alumno) => alumno.activo && alumno.calificacion >= 70,
  );
  const alumnosAusentes = alumnos.filter(
    (alumno) => !alumno.activo || alumno.calificacion < 70,
  );

  return (
    <main>
      <h1>Alumnos</h1>

      <FormularioAlumno />

      <TablaAlumnos
        id="alumnosPresentes"
        titulo="Alumnos presentes"
        alumnos={alumnosPresentes}
      />
      <TablaAlumnos
        id="alumnosAusentes"
        titulo="Alumnos ausentes o que no cumplen los requisitos"
        alumnos={alumnosAusentes}
      />

      <Link href="/">Regresar al inicio</Link>
    </main>
  );
}
