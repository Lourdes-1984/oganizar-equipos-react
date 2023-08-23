import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Rectangle1.png)" }}
    >
      <div className="redes">
        <a href="http">
          <img src="/img/facebook.png" alt="facebook" />
        </a>
        <a href="http">
          <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href="http">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/Vector.png" alt="logo" />
      <strong>Desarrollado por María L.Sosa</strong>
    </footer>
  );
};

export default Footer;
