import { BuscadorPage } from "./pages/BuscadorPage";
import { ClimaProvider } from "./context/ClimaProvider";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  return (
    <ClimaProvider>
      <MovieProvider>
        <BuscadorPage></BuscadorPage>
      </MovieProvider>
    </ClimaProvider>
  );
}

export default App;
