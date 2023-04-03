import { useEffect, useState } from "react";
import { createContext } from "react";

export const ContextGlobal = createContext(undefined);

export const GlobalContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [productAdd, setProductAdd] = useState({
    id: undefined,
    nombre: "",
    precio: 0,
    cantidad: 0,
  });

  return (
    <ContextGlobal.Provider
      value={{
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts,
        productAdd,
        setProductAdd,
      }}
    >
      <div>{children}</div>
    </ContextGlobal.Provider>
  );
};
