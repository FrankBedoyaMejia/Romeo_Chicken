import React from "react";
import productos from "../Data/Productos.json";
import { Card_Producto } from "./Card_Producto";

export const Nuestros_Productos = () => {
  return (
    <>
      <h1 className="section">Productos mas Vendidos</h1>
      <div className="section-productos">
        {productos
          ? productos.map((producto) => {
              return (
                <Card_Producto key={producto.titulo} producto={producto} />
              );
            })
          : null}
      </div>
    </>
  );
};
