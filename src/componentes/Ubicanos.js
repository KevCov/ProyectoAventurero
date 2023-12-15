import { Component } from "react";
import LocalesUbicacion from "./LocalesUbicacion";
import Footer from "./Footer";
import { Sociales } from "./Sociales";

class Ubicanos extends Component {
  render(){
    return(
      <div className="Ubicanos">
        <h1 className="titulo t2">Visitanos en nuestras sedes y redes sociales</h1>
        <LocalesUbicacion />
        <p className="titulo2">Siguenos en Facebook e Instagram para más contenido</p>
        <Sociales />
        <Footer />
      </div>
    )
  }
}

export default Ubicanos;