import { useState, useRef } from "react";
import iconMovieColor from "../assets/movieColor.svg";
import iconWeatherColor from "../assets/weatherColor.svg";
import { NavLink } from "react-router-dom";
import "../styles/Buscador.css";

export const BuscadorPage = () => {
  const [selector, setSelector] = useState("Buscador");
  // const [enviado, setEnviado] = useState("");
  // const [iconoTema, setIconoTema] = useState(true);
  const inputRef = useRef();

  const clima = () => {
    setSelector("Clima");
    // setIconoTema(true);
    // setEnviado("");
    inputRef.current.focus();
  };
  const peliculas = () => {
    setSelector("Peliculas");
    // setIconoTema(true);
    // setEnviado("");
    inputRef.current.focus();
  };
  const infoBuscar = (
    <h4 className="textoEnBuscador">
      Busca el{" "}
      <NavLink className="aClima" to="/clima" >
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
    if (selector === "Buscador") {
      return (
        <>
          <a href="/clima" onClick={clima}>
            <img
              className="iconoClima1"
              src={iconWeatherColor}
              alt="icono clima"
            />
          </a>
          <a href="/pelicula" onClick={peliculas}>
            <img
              className="iconoPelicula1"
              src={iconMovieColor}
              alt="icono pelicula"
            />
          </a>
        </>
      );
    }
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
