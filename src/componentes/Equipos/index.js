import React from "react";
import "./Equipos.css";
import Colaborador from "../Colaborador";
// import hexRgba from "hex-rgba";
import hexToRgba from "hex-to-rgba";

const Equipos = (props) => {
  const { titulo, colorPrimario, id } = props.datos;

  const { colaboradores, eliminarColaborador, cambioColor, likeFavorito } =
    props;

  const colorFondo = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
  };
  const colorBorder = {
    borderBottomColor: colorPrimario,
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipos" style={colorFondo}>
          <input
            type="color"
            className="input-color"
            value={hexToRgba(colorPrimario, 0.6)}
            onChange={(e) => {
              cambioColor(e.target.value, id);
            }}
          />
          <h3 style={colorBorder}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                likeFavorito={likeFavorito}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipos;
