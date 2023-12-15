import React, { useState } from "react";
import { PaqContext } from "./PaqContext";
import ListasPaquetes from "./ListasPaquetes";

function StateCarrito({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregar = (id) => {
    const pq = ListasPaquetes.find((p) => p.id == id);
    carrito.push(pq);
    setCarrito(carrito);
  };

  return (
    <PaqContext.Provider value={{ carrito, agregar }}>
      {children}
    </PaqContext.Provider>
  );
}

export default StateCarrito;
