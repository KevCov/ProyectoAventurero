import { Component } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { destinos, text} from "./ListasDestino"

function TarjetaDestino() {
  let [p, setp] = useState(0);

  useEffect(() => {
    const ciclo = setInterval(() => {
      setp(p + 1);
      if (p >= 3) setp(0); //si c>=longitud de imagenes -1, se inicializa
    }, 1000);

    return () => clearInterval(ciclo);
  }, [p]);

  const tarjetas = destinos.map((d, i) =>
    <div className="bloque-destino">
      <img className="img-destino" src={destinos[i][p]}></img>
      <p className="txt-destino">{text[i]}</p>
      <Link className="link-paquetes" to="/paquetes">Ver paquetes</Link>
    </div>
  );

  return <div className="Tarjeta-destino">{tarjetas}</div>;
}

export default TarjetaDestino;
