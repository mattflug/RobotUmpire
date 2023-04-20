import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Board from "./components/Board";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Board />
      </Router>
    </>
  );
}

export default App;
