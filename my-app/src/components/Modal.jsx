import React from "react";

export const ModalFilete = ({ open, setOpenFiletes }) => {
  const onClick = () => {
    setOpenFiletes(false);
  };
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="overlay__background">
        <h1>Hola Filete</h1>
        <button className="overlay__button" onClick={() => onClick()}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export const ModalChuzo = ({ open, setOpenChuzo }) => {
  const onClick = () => {
    setOpenChuzo(false);
  };
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="overlay__background">
        <h1>Hola Chuzo</h1>
        <button className="overlay__button" onClick={() => onClick()}>
          Cerrar
        </button>
      </div>
    </div>
  );
};
