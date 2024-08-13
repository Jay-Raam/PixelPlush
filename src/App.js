import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BackToTopButton from "./components/ui/Back";
import Unplush from "./components/Unplush";
import Image001 from "./components/image/Pixelplush.png";
import Home from "./components/home";
import "aos/dist/aos.css";
import AOS from "aos";
import Contact from "./components/Contact";
import "./index.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/">
          <img src={Image001} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/unplush">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unplush" element={<Unplush />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BackToTopButton />
    </Router>
  );
}

export default App;
