import { Fotos_Home } from "../components/Fotos_Home";
import { Nuestros_Productos_Home } from "../components/Nuestros_Productos_Home";
import { Nuestras_Recetas } from "../components/Nuestras_Recetas";

export const Home = () => {
  return (
    <>
      <Fotos_Home />
      <Nuestros_Productos_Home />
      <Nuestras_Recetas />
    </>
  );
};
