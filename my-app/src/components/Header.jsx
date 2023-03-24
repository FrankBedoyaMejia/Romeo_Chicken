import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__izquierda">
        <Link to="/home" className="header__linkImg">
          {/* <img src="img/Romeo4.jpg" alt="logo" /> */}
          {/* <img src="img/Romeo3.png" alt="logo" /> */}
          Romeo Chicken
        </Link>
      </div>
      <div className="header__derecha">
        <NavLink ex to="/home" className="header__link">
          Inicio
        </NavLink>
        <NavLink
          to="/sobreNosotros"
          activeClassName="active"
          className="header__link"
        >
          Sobre nosotros
        </NavLink>
        <NavLink to="/productos" className="header__link">
          Productos
        </NavLink>
      </div>
    </header>
  );
};
