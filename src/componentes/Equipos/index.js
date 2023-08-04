import React from "react";
import "./Equipos.css";

const Equipos = (props) => {
  const { titulo, colorPrimario, colorSecundario } = props.datos;
  const colorFondo = {
    backgroundColor: colorSecundario,
  };
  const colorBorder = {
    borderBottomColor: colorPrimario,
  };
  return (
    <section className="equipos" style={colorFondo}>
      <h3 style={colorBorder}>{titulo}</h3>
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipos;
