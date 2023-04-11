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

  const onAddProduct = (producto) => {
    if (allProducts.find((item) => item.id === producto.id)) {
      const products = allProducts.map((item) =>
        item.id === producto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + producto.precio * producto.quantity);
      setCountProducts(countProducts + producto.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + producto.precio * producto.quantity);
    setCountProducts(countProducts + producto.quantity);
    setAllProducts([...allProducts, producto]);
  };

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
        onAddProduct,
      }}
    >
      <div>{children}</div>
    </ContextGlobal.Provider>
  );
};
