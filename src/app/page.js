import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Inicio</h1>
      <Link href="/alumnos">Ver lista de alumnos</Link>
      <br></br>
      <Link href="/profesores">Ver lista de profesores</Link>
    </main>
  );
}