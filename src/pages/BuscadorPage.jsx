import { useState, useRef } from "react";
import iconMovieColor from "../assets/movieColor.svg";
import iconWeatherColor from "../assets/weatherColor.svg";
import { NavLink } from "react-router-dom";
import "../styles/Buscador.css";

export const BuscadorPage = () => {
  const [selector, setSelector] = useState("Buscador");
  const [enviado, setEnviado] = useState("");
  const [iconoTema, setIconoTema] = useState(true);
  const inputRef = useRef();

  const clima = () => {
    setSelector("Clima");
    setIconoTema(true);
    setEnviado("");
    inputRef.current.focus();
  };
  const peliculas = () => {
    setSelector("Peliculas");
    setIconoTema(true);
    setEnviado("");
    inputRef.current.focus();
  };
  const infoBuscar = (
    <h4 className="textoEnBuscador">
      Busca el{" "}
      <a className="aClima" href="/clima" onClick={clima}>
        Clima{" "}
      </a>
      actual de una ciudad o busca información de una
      <a className="aPelicula" href="/pelicula" onClick={peliculas}>
        {" "}
        Película.
      </a>
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
