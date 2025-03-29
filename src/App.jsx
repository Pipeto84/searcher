import { BuscadorPage } from "./pages/BuscadorPage";
import { ClimaProvider } from "./context/ClimaProvider";
import { MovieProvider } from "./context/MovieProvider";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <ClimaProvider>
      <MovieProvider>
        <NavBar></NavBar>
        <BuscadorPage></BuscadorPage>
      </MovieProvider>
    </ClimaProvider>
  );
}

export default App;
