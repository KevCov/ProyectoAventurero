import { Component } from "react";
import Portada from "./Portada";
import TarjetaDestino from "./TarjetaDestino";
import Footer from "./Footer";
import GuiasDestino from "./GuiasDestino";

class Destinos extends Component {
  render(){
    return(
      <div className="Destinos">
        <Portada />
        <h1 className="titulo">Informate sobre nuestros destinos</h1>
        <TarjetaDestino />
        <p className="titulo">Nuestros guias estrellas &#9733;</p>
        <GuiasDestino />
        <Footer />
      </div>
    )
  }
}

export default Destinos;