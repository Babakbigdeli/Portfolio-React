import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#b7b9b8] text-gray-900 flex-col p-80 pt-10">
        <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;