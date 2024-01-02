import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className=" bg-off-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <About />
    </div>
  );
}

export default App;
