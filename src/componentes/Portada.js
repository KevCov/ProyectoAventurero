import React, { Component } from "react";
import maravilla1 from "../img/machu-picchu.jpg";
import maravilla2 from "../img/cristo-redentor.jpg";
import maravilla3 from "../img/petra.jpg";
import maravilla4 from "../img/taj-mahal.jpg";
import maravilla5 from "../img/muralla-china.jpg";
import maravilla6 from "../img/coliseo-romano.jpg";
import maravilla7 from "../img/chicen-itza.jpg";

const maravillas = [maravilla1, maravilla2, maravilla3, maravilla4, maravilla5, maravilla6, maravilla7,];
class Portada extends Component {
  state = {
    maravilla: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      maravilla: 0,
    };
  }

  componentDidMount() {
    const ciclo = setInterval(() => {
      this.setState((prevState) => {
        return {
          maravilla:
            (prevState.maravilla + 1) % maravillas.length == 0
              ? 0
              : prevState.maravilla + 1,
        };
      });
    }, 2000);
  }

  render() {
    return (
      <div className="Portada">
        <img
          className="img-portada"
          src={maravillas[this.state.maravilla]}
        ></img>
      </div>
    );
  }
}

export default Portada;