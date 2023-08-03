import "./MiOrg.css";
// import { useState } from "react";

const MiOrg = (props) => {
  //   const [mostrar, actualizarMostrar] = useState(true);
  //   const mostrarClick = () => {
  //     console.log("mostrar/ocultar", !mostrar);
  //     actualizarMostrar();
  //   };

  return (
    <section className="org-section">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.png" alt="icon add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
