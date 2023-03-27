import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-izquierda">
          {/* <img src="/img/Romeo1.png" alt="Logo Romeo chicken" /> */}
          <span>Romeo Chicken</span>
        </div>
        <FontAwesomeIcon
          icon="fa-brands fa-whatsapp"
          style={{ color: "#ffffff" }}
        />
      </footer>
    </>
  );
};
