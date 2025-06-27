import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
import LogoAnimation from '../components/LogoAnimation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent  shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <LogoAnimation />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg text-gray-800 font-light">
          <Link to="/" className="hover:text-black border-r pr-4">Home</Link>
          <Link to="/about" className="hover:text-black border-r pr-4">About</Link>
          <Link to="/services" className="hover:text-black border-r pr-4">Portfolio</Link>
          {/* <Link to="/services" className="hover:text-black border-r pr-4">Awards</Link> */}
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 w-64 bg-opacity-90 px-6 py-4 space-y-3 shadow-md rounded-l-lg z-50 md:hidden transition-transform">
          <Link to="/" className="inline-block bg-white text-gray-800 font-semibold px-3 py-1 space-y-4 bg-opacity-50 rounded" onClick={() => setMenuOpen(false)}>Home</Link>
          <br/>
          <Link to="/about" className="inline-block bg-white text-gray-800 font-semibold px-3 py-1 space-y-4 bg-opacity-50 rounded" onClick={() => setMenuOpen(false)}>About</Link>
          <br/>
          <Link to="/services" className="inline-block bg-white text-gray-800 font-semibold px-3 py-1 space-y-4 bg-opacity-50 rounded" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          {/* <Link to="/services" className="inline-block bg-white text-gray-800 font-semibold px-3 py-1 rounded" onClick={() => setMenuOpen(false)}>Awards</Link> */}
          <br/>
          <Link to="/contact" className="inline-block bg-white text-gray-800 font-semibold px-3 py-1 space-y-4 bg-opacity-50 rounded" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

    </nav>
  );
}
