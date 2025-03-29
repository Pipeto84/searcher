import { useState, useContext } from "react";
import { Clima } from "../components/Clima";
import { ClimaContext } from "../context/ClimaContext";
import iconTermometro from "../assets/termometro.svg";
import iconWeatherColor from "../assets/weatherColor.svg";
import "../styles/Buscador.css";

export const ClimaPage = () => {
  const [dataInput, setDataInput] = useState("");
  const [enviado, setEnviado] = useState("");
  const [iconoTema, setIconoTema] = useState(true);
  const { fetchClima } = useContext(ClimaContext);

  const handleChanges = (e) => {
    setDataInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(dataInput);
    setIconoTema(false);
    fetchClima(dataInput);
    setDataInput("");
  };
  const seleccionada = () => {
    if (enviado.length > 0) {
      return <Clima></Clima>;
    } else {
      return;
    }
  };
  const iconosInfoTema = () => {
    if (iconoTema) {
      return (
        <div>
          <h4 className="textoTema">Busca el clima actual de una ciudad</h4>
          <img
            className="iconoClima1"
            src={iconWeatherColor}
            alt="icono clima"
          />
          <img className="iconoClima2" src={iconTermometro} alt="icono clima" />
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
            placeholder={"Ingresa una ciudad..."}
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
