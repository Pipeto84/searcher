import { useState, useContext, useRef } from "react";
import { Clima } from "../components/Clima";
import { Peliculas } from "../components/Peliculas";
import { ClimaContext } from "../context/ClimaContext";
import { MovieContext } from "../context/MovieContext";
import iconMovieColor from "../assets/movieColor.svg";
import iconCrispetas from "../assets/crispetas.svg";
import iconTermometro from "../assets/termometro.svg";
import iconWeatherColor from "../assets/weatherColor.svg";
import { NavLink } from "react-router-dom";
import "../styles/Buscador.css";

export const BuscadorPage = () => {
  const [selector, setSelector] = useState("Buscador");
  const [enviado, setEnviado] = useState("");
  const [iconoTema, setIconoTema] = useState(false);
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
          <a href="#" onClick={clima}>
            <img
              className="iconoClima1"
              src={iconWeatherColor}
              alt="icono clima"
            />
          </a>
          <a href="#" onClick={peliculas}>
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
    switch (selector) {
      case "Buscador":
        return infoBuscar;
      case "Clima":
        if (enviado.length > 0) {
          return <Clima></Clima>;
        } else {
          return;
        }
      case "Peliculas":
        if (enviado.length > 0) {
          return <Peliculas></Peliculas>;
        } else {
          return;
        }
      default:
        return;
    }
  };
  return (
    <div className="buscar">
      {seleccionada()}
      {iconosBuscar()}
      {/* {iconosInfoTema()} */}
    </div>
  );
};
