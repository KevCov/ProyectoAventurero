import { Component } from "react";
import Portada from "./Portada";
import SectionInfo from "./SectionInfo";
import SectionExperiencias from "./SectionExperiencias";
import Footer from "./Footer";
import { VideoPrincipal } from "./VideoPrincipal";

class Inicio extends Component {
  render(){
    return(
      <div className="Inicio">
        <Portada />
        <p className="titulo">Conoce más sobre nosotros</p>
        <SectionInfo />
        <p className="titulo">Nuestro destino favorito: Perú</p>
        <VideoPrincipal />
        <p className="titulo exp">Experiencias Compartidas</p>
        <SectionExperiencias />
        <Footer />
      </div>
    )
  }
}

export default Inicio;