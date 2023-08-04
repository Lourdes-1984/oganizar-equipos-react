import React from "react";
import "./Colaborador.css";

const Colaborador = (props) => {
  return (
    <div className="colaborador">
      <div className="encabezado">
        <img src="https://github.com/Lourdes-1984.png" alt="foto colaborador" />
        <div className="info">
          <h4 className="nombre">Genesys Rondón</h4>
          <h5>Desarrolladora de software e instructora </h5>
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
