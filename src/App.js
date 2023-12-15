import "./App.css";
import "./estilos/Inicio.css";
import "./estilos/Destinos.css";
import "./estilos/Paquetes.css";
import "./estilos/Contactanos.css";
import "./estilos/Ubicanos.css";
import "./estilos/Carrito.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Destinos from "./componentes/Destinos";
import Inicio from "./componentes/Inicio";
import Paquetes from "./componentes/Paquetes";
import Ubicanos from "./componentes/Ubicanos";
import Contactanos from "./componentes/Contactanos";
import { Carrito } from "./componentes/Carrito";
import StateCarrito from "./componentes/StateCarrito";

function App() {
  return (
    <StateCarrito>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/destinos" element={<Destinos />}></Route>
          <Route path="/paquetes" element={<Paquetes />}></Route>
          <Route path="/ubicanos" element={<Ubicanos />}></Route>
          <Route path="/contactanos" element={<Contactanos />}></Route>
          <Route path="/carrito" element={<Carrito />}></Route>
        </Routes>
      </div>
    </StateCarrito>
  );
}

export default App;
