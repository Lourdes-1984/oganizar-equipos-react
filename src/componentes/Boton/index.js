import "./Boton.css";
const Boton = (props) => {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
};
export default Boton;
