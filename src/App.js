import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import bgImage from './images/bg.jpg'; // your background image

function App() {
  return (
    <Router>
      <div
        className="relative w-full h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />
      

      {/* Main Content Layer (below background) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white ">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
      </div>

      <WhatsAppButton />
    </Router>
  );
}

export default App;
