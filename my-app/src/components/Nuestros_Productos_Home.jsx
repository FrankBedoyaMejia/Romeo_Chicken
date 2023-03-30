import React from "react";
import productos from "../Data/Productos.json";
import { Card_Producto_home } from "./Card_Producto";

export const Nuestros_Productos_Home = () => {
  console.log(productos);
  return (
    <div className="section_prductos" id="section-1">
      <h1 className="section_prductos-h1">Productos mas Vendidos</h1>
      <div className="section_prductos-home">
        <Card_Producto_home key={productos[0].titulo} producto={productos[0]} />
        <Card_Producto_home key={productos[1].titulo} producto={productos[1]} />
        <Card_Producto_home key={productos[2].titulo} producto={productos[2]} />
      </div>
    </div>
  );
};
