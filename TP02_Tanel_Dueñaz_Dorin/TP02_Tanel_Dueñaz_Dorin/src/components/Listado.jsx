import Cita from "./Cita";
import SectionTitle from "./SectionTitle";
import "./Listado.css";

function Listado({ citas, eliminarCita }) {
  return (
    <div className="listado">
      <SectionTitle level={2}>ADMINISTRA TUS CITAS</SectionTitle>

      {citas.map((cita, index) => (
        <Cita
          key={index}
          cita={cita}
          index={index}
          eliminarCita={eliminarCita}
        />
      ))}
    </div>
  );
}

export default Listado;