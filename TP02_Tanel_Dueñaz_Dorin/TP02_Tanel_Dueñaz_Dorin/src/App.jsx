import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import SectionTitle from "./components/SectionTitle";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([
    {
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna",
    },
  ]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    setCitas(citas.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <SectionTitle level={1}>ADMINISTRADOR DE PACIENTES</SectionTitle>

      <div className="contenido">
        <Formulario agregarCita={agregarCita} />
        <Listado citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
  );
}

export default App;