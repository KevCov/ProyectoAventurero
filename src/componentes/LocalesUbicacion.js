import React from "react";
import { Component } from "react";
import lc1 from "../img/local1.jpg";
import lc2 from "../img/local2.jpg";
import lc3 from "../img/local3.jpg";
import lc4 from "../img/local4.jpg";

const locales = [
  {
    local: lc1,
    pais: "Colombia",
    direc: "https://maps.app.goo.gl/Smaj8nfjQ2Q7aJme6",
    telf: "+57 7628-873-363",
  },
  {
    local: lc2,
    pais: "Perú",
    direc: "https://maps.app.goo.gl/UJDTWNCnTVdhUjk4A",
    telf: "+51 965-615-212",
  },
  {
    local: lc3,
    pais: "Uruguay",
    direc: "https://maps.app.goo.gl/CpoPqCD9C6SYN94r8",
    telf: "+598 9168-273-0863",
  },
  {
    local: lc4,
    pais: "Brasil",
    direc: "https://maps.app.goo.gl/qGhHBhtH2cTtxKMY8",
    telf: "+55 256-4273-103",
  },
];
class LocalesUbicacion extends Component {
  state = {
    l: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      l: locales.map((x) => (
        <div className="bloque-locales">
          <img className="img-locales" src={x.local}></img>
          <div className="txt-locales">
            <p>{x.pais}</p>
            <a href={x.direc} className="p-locales" target="_blank">
              {x.direc}
            </a>
            <a className="p-locales">{x.telf}</a>
          </div>
        </div>
      )),
    };
  }
  render() {
    return (
      <div className="Section-locales">
        <div className="Locales-ubicanos">{this.state.l}</div>
        <div className="videos-locales">
          <h2 className="titulo2">¡Contenido de algunos de nuestros clientes!</h2>
          <iframe
            muted
            width="500"
            height="290"
            src="https://www.youtube.com/embed/5cxQJDUeKX4?si=tuMH-2gTqok1EfLm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="500"
            height="290"
            src="https://www.youtube.com/embed/a-xPyUkFBfE?si=DaZ9ONqpXJMyddwX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default LocalesUbicacion;
