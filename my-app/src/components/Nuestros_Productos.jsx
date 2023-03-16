import React from "react";
import productos from "../Data/Productos.json";
import { Card_Producto } from "./Card_Producto";

export const Nuestros_Productos = () => {
  return (
    <>
      <h1 className="section">Productos</h1>
      <div className="section-productos">
        {productos
          ? productos.map((producto) => (
              <Card_Producto key={producto.titulo} producto={producto} />
            ))
          : null}
        {/* <div className="section__izquierda"></div>
      <div className="section__derecha"></div> */}
      </div>
    </>
  );
};
