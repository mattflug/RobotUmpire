import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";


function App() {
  return (
    <>
      <Router className= "router">
        <Header />
        <Board />
      </Router>
    </>
  );
}

export default App;
