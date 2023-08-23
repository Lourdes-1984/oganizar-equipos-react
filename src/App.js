import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipos from "./componentes/Equipos";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaborador] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      nombre: "Maria Sosa",
      foto: "https://github.com/Lourdes-1984.png",
      puesto: "Desrrolladora Web",
      favorito: true,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      nombre: "Harland Lohara",
      foto: "https://github.com/harlandlohora.png",
      puesto: "Desrrolladora Web",
      favorito: false,
    },
    {
      id: uuidv4(),
      equipo: "Devops",
      nombre: "Jose Dario Gonzalez Cha",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      puesto: "Desrrolladora Web",
      favorito: false,
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      nombre: "Jeanmarie Quijada",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      puesto: "Desrrolladora Web",
      favorito: false,
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestion",
      nombre: "Christian Velasco",
      foto: "https://github.com/christianpva.png",
      puesto: "Desrrolladora Web",
      favorito: false,
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    actualizarColaborador([...colaboradores, colaborador]);
  };
  const eliminarColaborador = (id) => {
    console.log("eliminando", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaborador(nuevosColaboradores);
  };
  const cambioColor = (color, id) => {
    console.log("color:", color, id);
    const equipoActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equipoActualizados);
  };
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
  };
  const likeFavorito = (id) => {
    console.log("likeFavorito", id);
    const likeColaboradorActualizado = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    });
    actualizarColaborador(likeColaboradorActualizado);
  };

  return (
    <div>
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <div></div> } */}
      {/* { mostrarFormulario ? <Formulario /> : <></> } */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => {
        return (
          <Equipos
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador={eliminarColaborador}
            cambioColor={cambioColor}
            likeFavorito={likeFavorito}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
