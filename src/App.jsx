import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import Home from "./pages/Home";
import Boote from "./pages/Boote";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boote" element={<Boote />} />
          <Route path="/reservierungen" element={<h1>Reservierungen</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
