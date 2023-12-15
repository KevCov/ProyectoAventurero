import { Link, Outlet } from "react-router-dom";
import { Component } from "react";
import logo from "../img/logo-aventurero.png"

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="Menu">
          <div className="box-logo">
            <img className="img-logo" src={logo}></img>
            <span className="nombre-logo">Aventurero</span>
          </div>

          <Link className="link-menu" to="/">Inicio</Link>
          <Link className="link-menu" to="/destinos">Destinos</Link>
          <Link className="link-menu" to="/paquetes">Paquetes</Link>
          <Link className="link-menu" to="/ubicanos">Ubícanos</Link>
          <Link className="link-menu" to="/contactanos">Contáctanos</Link>
          <Link className="link-menu" to="/carrito">Carrito</Link>
        </div>
        <Outlet />
      </div>
    );
  }
}

export default Menu;