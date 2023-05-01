import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Router >
        <Header />
        <Board />
        <Footer />
      </Router>
    </>
  );
}

export default App;
