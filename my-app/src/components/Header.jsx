import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__izquierda">
        <img src="img/Romeo.jpg" alt="logo" />
        {/* <h1>Romeo Chicken</h1> */}
      </div>
      <div className="header__derecha">
        <Link to="/home" className="header__link">
          Inicio
        </Link>
        <Link to="/sobreNosotros" className="header__link">
          Sobre nosotros
        </Link>
      </div>
    </header>
  );
};
