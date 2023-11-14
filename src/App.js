import "./App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import "./sass/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
