import { BuscadorPage } from "./pages/BuscadorPage";
import { ClimaPage } from "./pages/ClimaPage";
import { PeliculasPage } from "./pages/PeliculaPage";
import { ClimaProvider } from "./context/ClimaProvider";
import { MovieProvider } from "./context/MovieProvider";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Clima } from "./components/Clima";
import { Peliculas } from "./components/Peliculas";

function App() {
  return (
    <ClimaProvider>
      <MovieProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<BuscadorPage></BuscadorPage>}></Route>
          <Route path="/clima" element={<ClimaPage></ClimaPage>}></Route>
          <Route path="/pelicula" element={<PeliculasPage></PeliculasPage>}></Route>
        </Routes>
      </MovieProvider>
    </ClimaProvider>
  );
}

export default App;
