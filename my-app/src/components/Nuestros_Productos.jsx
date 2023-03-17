import React from "react";
import productos from "../Data/Productos.json";
import {
  Card_Producto,
  Card_Producto_preciosolo,
  Card_Producto_filetes,
} from "./Card_Producto";

export const Nuestros_Productos = () => {
  return (
    <>
      <h1 className="section">Productos mas Vendidos</h1>
      <div className="section-productos">
        <Card_Producto key={productos[1].titulo} producto={productos[1]} />

        <Card_Producto_filetes
          key={productos[0].titulo}
          producto={productos[0]}
        />
        <Card_Producto_preciosolo
          key={productos[2].titulo}
          producto={productos[2]}
        />

        {/* <div className="section__izquierda"></div>
      <div className="section__derecha"></div> */}
      </div>
    </>
  );
};
