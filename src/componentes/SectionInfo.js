import { Component } from "react";

class SectionInfo extends Component {
  render(){
    return(
      <div className="Section-info">
        <div className="div-info">
          <h2 className="h2-info">Nuestra Misión</h2>
          <p className="p-info">Embarcamos en la apasionante misión de convertir cada viaje en una experiencia llena de alegría, descubrimiento y conexiones humanas duraderas. Desde la planificación hasta el último adiós en el aeropuerto, queremos que cada paso sea tan fácil como dar un paseo por la playa al atardecer. Nuestra misión va más allá de los destinos; se trata de nutrir la curiosidad, fomentar la amistad y construir puentes entre culturas. Con calidez, amabilidad y una pizca de aventura, te invitamos a descubrir el mundo con nosotros y a crear recuerdos que te harán sonreír incluso mucho después de haber vuelto a casa.</p>
        </div>
        <div className="div-info">
          <h2 className="h2-info">Nuestra Visión</h2>
          <p className="p-info">Nos visualizamos como la brújula de la felicidad viajera, destacando por experiencias únicas y auténticas. Aspiramos a ser pioneros en la creación de recuerdos atemporales, inspirando a explorar el mundo con ojos asombrados y a vivir cada viaje como una emocionante aventura. Conectamos corazones a través de experiencias de viaje extraordinarias.</p>
        </div>
      </div>
    )
  }
}

export default SectionInfo;