import { Component } from "react";
import guia1 from "../img/guia1.jpg";
import guia2 from "../img/guia2.jpg";
import guia3 from "../img/guia3.jpg";

const guias = [
  {"img" : guia1, "nombre" : "Manuel Casas Gonzales"},
  {"img" : guia2, "nombre" : "Gladis Martinez Sanchez"},
  {"img" : guia3, "nombre" : "Monica Garcia Schez"}];
class GuiasDestino extends Component {
  state = {
    g:null
  }

  constructor(props){
    super(props);
    this.state={
      g: guias.map( x =>
        <div className="bloque-guia">
          <img className="img-guia" src={x.img}></img>
          <p className="nombre-guia">{x.nombre}</p>
        </div>
      )
    }
  }
  render(){
    return(
      <div className="Section-guias">
        {this.state.g}
      </div>
    )
  }
}

export default GuiasDestino;