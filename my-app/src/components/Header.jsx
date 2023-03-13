import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__izquierda">
        <img src="img/Romeo2.png" alt="logo" />
        <h1>Romeo Chicken</h1>
      </div>
      <div className="header__derecha">
        <ul>
          <li>Inicio</li>
          <li>Sobre nosotros</li>
        </ul>
      </div>
    </header>
  );
};
