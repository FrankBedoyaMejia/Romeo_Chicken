import { useState } from "react";
import { createContext } from "react";

export const ContextGlobal = createContext(undefined);

export const GlobalContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <ContextGlobal.Provider
      value={{
        carrito,
        setCarrito,
      }}
    >
      <div>{children}</div>
    </ContextGlobal.Provider>
  );
};
