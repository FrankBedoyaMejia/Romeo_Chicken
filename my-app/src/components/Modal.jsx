import React from "react";

export const ModalFilete = ({ open }) => {
  if (!open) return null;
  return (
    <div>
      <h1>Hola Filete</h1>
    </div>
  );
};

export const ModalChuzo = ({ open }) => {
  if (!open) return null;

  return (
    <div>
      <h1>Hola Chuzo</h1>
    </div>
  );
};
