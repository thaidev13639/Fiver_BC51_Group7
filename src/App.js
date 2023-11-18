import "./App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import "./sass/style.scss";
import { LoadingProvider } from "./contexts/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
