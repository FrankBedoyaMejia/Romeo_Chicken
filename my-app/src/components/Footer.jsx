import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-izquierda">
          {/* <img src="/img/Romeo1.png" alt="Logo Romeo chicken" /> */}
          <span>Romeo Chicken</span>
        </div>
        <FontAwesomeIcon icon={faWhatsapp} />
      </footer>
    </>
  );
};
