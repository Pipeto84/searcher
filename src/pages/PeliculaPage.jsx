import { useState, useContext } from "react";
import { Peliculas } from "../components/Peliculas";
import { MovieContext } from "../context/MovieContext";
import iconMovieColor from "../assets/movieColor.svg";
import iconCrispetas from "../assets/crispetas.svg";
import "../styles/Buscador.css";

export const PeliculasPage = () => {
  const [dataInput, setDataInput] = useState("");
  const [enviado, setEnviado] = useState("");
  const [iconoTema, setIconoTema] = useState(true);
  const { fetchMovie } = useContext(MovieContext);

  const handleChanges = (e) => {
    setDataInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(dataInput);
    setIconoTema(false);
    fetchMovie(dataInput);
    setDataInput("");
  };
  const seleccionada = () => {
    if (enviado.length > 0) {
      return <Peliculas></Peliculas>;
    } else {
      return;
    }
  };
  const iconosInfoTema = () => {
    if (iconoTema) {
      return (
        <div>
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
        </div>
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
            placeholder={"Ingresa nombre de película..."}
            id="inputBuscar"
            autoComplete="off"
            autoFocus
          />
        </div>
      </form>
      {seleccionada()}
      {iconosInfoTema()}
    </div>
  );
};
