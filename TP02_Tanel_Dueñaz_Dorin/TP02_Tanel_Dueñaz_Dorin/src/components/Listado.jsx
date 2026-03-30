import Cita from "./Cita";
import "./Listado.css";

function Listado({ citas }) {
  return (
    <div className="listado">
      <h2>ADMINISTRA TUS CITAS</h2>

      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  );
}

export default Listado;