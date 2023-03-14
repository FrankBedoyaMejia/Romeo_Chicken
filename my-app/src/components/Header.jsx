import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__izquierda">
        <img src="img/Romeo2.png" alt="logo" />
        <h1>Romeo Chicken</h1>
      </div>
      <div className="header__derecha">
        <Link to="/home" style={{ textDecoration: `none`, color: `black` }}>
          Inicio
        </Link>
        <Link
          to="/sobreNosotros"
          style={{ textDecoration: `none`, color: `black` }}
        >
          Sobre nosotros
        </Link>
      </div>
    </header>
  );
};
