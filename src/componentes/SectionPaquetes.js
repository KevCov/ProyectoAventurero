import { Component, useContext } from "react";
import ListasPaquetes from "./ListasPaquetes";
import { PaqContext } from "./PaqContext";

function SectionPaquetes({children}) {
  const {agregar} = useContext(PaqContext);

  return (
    <div className="Section-paquetes">
      {ListasPaquetes.map((x, i) => (
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
          <button className="btn-comprar" onClick={ () => agregar(x.id) }>
            Agregar a Carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default SectionPaquetes;
