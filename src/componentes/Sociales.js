import fc from "../img/facebook.png";
import ig from "../img/instagram.png";

export function Sociales(){
  return(
    <div className="Sociales">
      <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><img className="img-sociales" src={fc}></img></a>
      <a href="https://www.instagram.com/" target="_blank"><img className="img-sociales" src={ig}></img></a>
    </div>
  )
}