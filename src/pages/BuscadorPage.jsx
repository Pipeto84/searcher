import iconMovieColor from "../assets/movieColor.svg";
import iconWeatherColor from "../assets/weatherColor.svg";
import { NavLink } from "react-router-dom";
import "../styles/Buscador.css";

export const BuscadorPage = () => {
  const infoBuscar = (
    <h4 className="textoEnBuscador">
      Busca el{" "}
      <NavLink className="aClima" to="/clima">
        Clima{" "}
      </NavLink>
      actual de una ciudad o busca información de una
      <NavLink className="aPelicula" to="/pelicula">
        {" "}
        Película.
      </NavLink>
    </h4>
  );
  const iconosBuscar = () => {
    return (
      <>
        <NavLink to="/clima">
          <img
            className="iconoClima1"
            src={iconWeatherColor}
            alt="icono clima"
          />
        </NavLink>
        <NavLink to="/pelicula">
          <img
            className="iconoPelicula1"
            src={iconMovieColor}
            alt="icono pelicula"
          />
        </NavLink>
      </>
    );
  };
  const seleccionada = () => {
    return infoBuscar;
  };
  return (
    <div className="buscar">
      {seleccionada()}
      {iconosBuscar()}
    </div>
  );
};
