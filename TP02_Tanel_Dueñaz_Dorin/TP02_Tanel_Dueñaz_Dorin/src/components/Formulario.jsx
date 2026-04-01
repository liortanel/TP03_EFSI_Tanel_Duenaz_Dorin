import { useState } from "react";
import "./Formulario.css";
import SectionTitle from "./SectionTitle";

function Formulario({ agregarCita }) {
  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      cita.mascota === "" ||
      cita.dueño === "" ||
      cita.fecha === "" ||
      cita.hora === "" ||
      cita.sintomas === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    agregarCita(cita);

    setCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <div className="formulario">
      <SectionTitle level={2}>CREAR MI CITA</SectionTitle>

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          value={cita.mascota}
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueño"
          value={cita.dueño}
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={cita.fecha}
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={cita.hora}
          onChange={handleChange}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          value={cita.sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit">AGREGAR CITA</button>
      </form>
    </div>
  );
}

export default Formulario;