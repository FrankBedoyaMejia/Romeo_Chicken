import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__izquierda">
        <Link to="/home">
          {/* <img src="img/Romeo.jpg" alt="logo" /> */}
          <img src="img/Romeo2.png" alt="logo" />
          {/* <h1>Romeo Chicken</h1> */}
        </Link>
      </div>
      <div className="header__derecha">
        <Link to="/home" className="header__link">
          Inicio
        </Link>
        <Link to="/sobreNosotros" className="header__link">
          Sobre nosotros
        </Link>
        <Link to="/sobreNosotros" className="header__link">
          Productos
        </Link>
      </div>
    </header>
  );
};
