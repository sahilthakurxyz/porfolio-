import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Hireme from "./components/Hireme";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hireme" element={<Hireme />} />
    </Routes>
  );
}

export default App;
