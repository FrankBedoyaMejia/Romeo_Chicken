import { React, useState } from "react";
import productos from "../Data/Productos.json";
import { Card_Producto_home } from "./Card_Producto";
import { ModalFilete, ModalChuzo } from "./Modal";

export const Nuestros_Productos_Home = () => {
  const [openFiletes, SetOpenFiletes] = useState(false);
  const [openChuzo, SetOpenChuzo] = useState(false);
  return (
    <>
      <ModalFilete open={openFiletes} />
      <ModalChuzo open={openChuzo} />
      <h1 className="section_prductos-h1">Productos mas Vendidos</h1>
      <div className="section_prductos-home">
        <Card_Producto_home producto={productos[0]} />
        <Card_Producto_home producto={productos[1]} />
        <Card_Producto_home producto={productos[2]} />
      </div>
    </>
  );
};
