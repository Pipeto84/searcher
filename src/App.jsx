import { BuscadorPage } from "./pages/BuscadorPage";
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
        <BuscadorPage></BuscadorPage>
        <Routes>
          <Route path="/clima" element={<Clima></Clima>}></Route>
          <Route path="/pelicula" element={<Peliculas></Peliculas>}></Route>
        </Routes>
      </MovieProvider>
    </ClimaProvider>
  );
}

export default App;
