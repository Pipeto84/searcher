import { useState, useContext, useRef } from "react";
import { Clima } from "../components/Clima";
import { Peliculas } from "../components/Peliculas";
import { ClimaContext } from "../context/ClimaContext";
import { MovieContext } from "../context/MovieContext";
import iconMovieColor from "../assets/movieColor.svg";
import iconCrispetas from "../assets/crispetas.svg";
import iconTermometro from "../assets/termometro.svg";
import iconWeatherColor from "../assets/weatherColor.svg";
import "../styles/Buscador.css";

export const ClimaPage = () => {
  const [selector, setSelector] = useState("Clima");
  const [dataInput, setDataInput] = useState("");
  const [enviado, setEnviado] = useState("");
  const [iconoTema, setIconoTema] = useState(true);
  const { fetchClima } = useContext(ClimaContext);
  const { fetchMovie } = useContext(MovieContext);
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
      <a className="aClima" href="#" onClick={clima}>
        Clima{" "}
      </a>
      actual de una ciudad o busca información de una
      <a className="aPelicula" href="#" onClick={peliculas}>
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
  const handleChanges = (e) => {
    setDataInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(dataInput);
    setIconoTema(false);
    if (selector === "Clima") {
      fetchClima(dataInput);
      setDataInput("");
    } else if (selector === "Peliculas") {
      fetchMovie(dataInput);
      setDataInput("");
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
  const handlePlaceHolder = () => {
    switch (selector) {
      case "Buscador":
        return "Selecciona un tema...";
      case "Clima":
        return "Ingresa una ciudad...";
      case "Peliculas":
        return "Ingresa nombre de película...";
      default:
        return "";
    }
  };
  const iconosInfoTema = () => {
    if (selector === "Clima" && iconoTema) {
      return (
        <>
          <h4 className="textoTema">Busca el clima actual de una ciudad</h4>
          <img
            className="iconoClima1"
            src={iconWeatherColor}
            alt="icono clima"
          />
          <img className="iconoClima2" src={iconTermometro} alt="icono clima" />
        </>
      );
    } else if (selector === "Peliculas" && iconoTema) {
      return (
        <>
          <h4 className="textoTema">Busca información sobre una película</h4>
          <img
            className="iconoPelicula1"
            src={iconMovieColor}
            alt="icono pelicula"
          />
          <img
            className="iconoPelicula2"
            src={iconCrispetas}
            alt="icono pelicula"
          />
        </>
      );
    }
  };
  return (
    <div className="buscar">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 buscador">
          <input
            type="text"
            className="form-control , entrada"
            value={dataInput}
            onChange={handleChanges}
            placeholder={handlePlaceHolder()}
            id="inputBuscar"
            autoComplete="off"
            ref={inputRef}
          />
        </div>
      </form>
      {seleccionada()}
      {iconosBuscar()}
      {iconosInfoTema()}
    </div>
  );
};
