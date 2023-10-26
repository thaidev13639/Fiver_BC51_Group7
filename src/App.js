import "./App.css";
// import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  return (
    // <>
    //   <Header />
    // </>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
