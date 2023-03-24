import React from "react";
import productos from "../Data/ProductosMasVendidos.json";
import { Card_Producto_home } from "./Card_Producto";

export const Nuestros_Productos_Home = () => {
  return (
    <div className="section_prductos" id="section-1">
      <h1 className="section_prductos-h1">Productos mas Vendidos</h1>
      <div className="section_prductos-home">
        {productos
          ? productos.map((producto) => {
              return (
                <Card_Producto_home key={producto.titulo} producto={producto} />
              );
            })
          : null}
      </div>
    </div>
  );
};
