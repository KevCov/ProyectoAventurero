import React, { useContext } from "react";
import { PaqContext } from "./PaqContext";
import StateCarrito from "./StateCarrito";

export function Carrito({ children }) {
  const { carrito } = useContext(PaqContext);
  return (
    <div className="Carrito">
      <div className="pqts">
        {carrito.map((x, i) => (
          <div className="bloque-paquetes" key={i}>
            <img className="img-paquetes" src={x.img}></img>
            <p>
              <b>Ubicacion:</b> {x.direc}
            </p>
            <p>
              <b>Tiempo:</b> {x.tiempo}
            </p>
            <p>
              <b>Edad:</b> {x.edad}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
