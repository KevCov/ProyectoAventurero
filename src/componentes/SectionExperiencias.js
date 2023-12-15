import { Component } from "react";
import exp1 from "../img/experiencia1.jpg";
import exp2 from "../img/experiencia2.jpg";
import exp3 from "../img/experiencia3.jpg";
import exp4 from "../img/experiencia4.png";
import cert1 from "../img/certificado1.png";
import cert2 from "../img/certificado2.png";
import cert3 from "../img/certificado3.png";
import cert4 from "../img/certificado4.png";
import cert5 from "../img/certificado5.png";

const certificados = [cert1, cert2, cert3, cert4, cert5];
const experiencias = [
  {"img" : exp1, "txt" : "Sentimos la aventura y adrenalina con toda la seguridad que nos proporcionaron, ¡Excelente!."},
  {"img" : exp2, "txt" : "Disfrutamos del paisaje y la compañia de nuestro guia Jose."},
  {"img" : exp3, "txt": "Nos recomendaron las fechas perfectas para disfrutas de este maravilloso lugar."},
  {"img" : exp4, "txt" : "¡Amamos la experiencia!, definitivamente nos contactaremos de nuevo."}
];
class SectionExperiencias extends Component {
  state = {
    exp:null,
    cer: null
  }

  constructor(props){
    super(props);
    this.state={
      exp: experiencias.map( (x, i) => 
        <div className="bloque-exp" key={i}>
          <img className="img-exp" src={x.img}></img>
          <p className="txt-exp">{x.txt}</p>
        </div>
      ),
      cer: certificados.map( (i, k) =>
        <img className="img-cert" src={i} key={k}></img>
      )
    }
  }
  render(){
    return(
      <div>
        <div className="Section-experiencias">
          {this.state.exp}
        </div>
        <div className="bloque-cert">
          <p>Parte de nuestro crecimiento es obtener certificaciones, premios y ganar concursos.<br></br>Todo esto se refleja en el servicio a nuestros clientes.</p>
          <div className="Section-certificados">
            {this.state.cer}
          </div>
        </div>
      </div>
    )
  }
}

export default SectionExperiencias;