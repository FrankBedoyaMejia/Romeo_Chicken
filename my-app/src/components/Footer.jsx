import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-izquierda">
          {/* <img src="/img/Romeo1.png" alt="Logo Romeo chicken" /> */}
          <span>Romeo Chicken</span>
        </div>
        <span>2023 ©Romeo Chicken todos los derechos reservados</span>
        <div className="footer-derecha">
          <a href="https://example.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="footer-icono"
              size="2xl"
            />
          </a>
        </div>
      </footer>
    </>
  );
};
