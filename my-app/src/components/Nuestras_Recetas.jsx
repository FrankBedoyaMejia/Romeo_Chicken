import React from "react";

export const Nuestras_Recetas = () => {
  return (
    <>
      <div>
        <h1 className="section_recetas">
          Algunas Recetas con nuestros productos
        </h1>
        <div className="section_recetas-contenedor">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8fz_GMOP5Qc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="section_recetas-videos"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VRf8GGR9Chs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="section_recetas-videos"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fhv8cYQkLII"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="section_recetas-videos"
          ></iframe>
        </div>
      </div>
    </>
  );
};
