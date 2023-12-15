import { Component } from "react";
import Portada from "./Portada";
import SectionPaquetes from "./SectionPaquetes";
import Footer from "./Footer";
import { VideosPaquetes } from "./VideosPaquetes";
import StateCarrito from "./StateCarrito";

class Paquetes extends Component {
  render() {
    return (
      <div className="Paquetes">
        <Portada />
        <h1 className="titulo">Elige el paquete que más se adapte a ti</h1>
        <SectionPaquetes />
        <VideosPaquetes />
        <Footer />
      </div>
    );
  }
}

export default Paquetes;
