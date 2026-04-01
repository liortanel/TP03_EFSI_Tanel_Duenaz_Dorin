import "./Formulario.css";
import SectionTitle from "./SectionTitle";
import FormInput from "./FormInput";

function Formulario() {
  return (
    <div className="formulario">
      <SectionTitle level={2}>CREAR MI CITA</SectionTitle>

      <FormInput label="Nombre Mascota" placeholder="Nombre Mascota" />
      <FormInput label="Nombre Dueño" placeholder="Nombre dueño de la mascota" />
      <FormInput label="Fecha" type="date" />
      <FormInput label="Hora" type="time" />
      <FormInput label="Sintomas" type="textarea" />

      <button>AGREGAR CITA</button>
    </div>
  );
}

export default Formulario;