import { Component } from "react";
import { FormContactanos } from "./FormContactanos";
import Footer from "./Footer";

class Contactanos extends Component {
  render(){
    return(
      <div className="Contactanos">
        <h1 className="titulo t2">¡Contactate con nosotros!</h1>
        <FormContactanos />
        <Footer />
      </div>
    )
  }
}

export default Contactanos;