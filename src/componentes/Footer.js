import {Component} from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../img/logo-aventurero.png";
import Contactanos from "./Contactanos";

class Footer extends Component {
  render(){
    return(
      <div className="Footer">
        <div className="bloque-footer1">
          <img className="img-footer" src={logo}></img>
          <div className="txt-footer">
            <p className="p-footer">Aventurero</p>
            <p>"Descubre el Mundo, Vive la Aventura: <br></br> Tu Destino, Nuestra Pasión."</p>
          </div>
        </div>
        <div className="bloque-footer2">
          <p className="p-footer">Nosotros</p>
          <a href="https://www.google.com/maps" target="_blank">Localiza una sucursal</a>
          <a href="https://pe.computrabajo.com/" target="_blank">Trabaja con nosotros</a>
          <a href="#">Politica de privacidad</a>
          <a href="#">Avisos legales</a>
        </div>
        <div className="bloque-footer3">
          <p className="p-footer">¿Necesitas ayuda?</p>
          <Link className="vinculo-contac" to="/contactanos">Contactanos</Link>
        </div>
      </div>
    )
  }
}

export default Footer;