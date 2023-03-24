import React from "react";
import productos from "../Data/Productos.json";
import { Card_Productos } from "./Card_Producto";

export const Nuestros_Productos = () => {
  return (
    <div className="section">
      <h1 className="section-h1">Productos</h1>
      <div className="section-productos">
        {productos
          ? productos.map((producto) => {
              return (
                <Card_Productos key={producto.titulo} producto={producto} />
              );
            })
          : null}
      </div>
    </div>
  );
};
