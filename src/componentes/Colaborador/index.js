import React from "react";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = (props) => {
  const { nombre, puesto, foto, id, favorito } = props.datos;
  const { colorPrimario, eliminarColaborador, likeFavorito } = props;

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
        <div className="info">
          <h4 className="nombre">{nombre}</h4>
          <h5>{puesto}</h5>
          {favorito ? (
            <AiFillHeart color="red" onClick={() => likeFavorito(id)} />
          ) : (
            <AiOutlineHeart onClick={() => likeFavorito(id)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
