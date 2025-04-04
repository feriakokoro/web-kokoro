import React, { useState } from "react";
import { Link } from "react-router-dom";
import strawberryLogo from "../assets/icons/strawberry-logo.webp";
import "../assets/styles/navbar.css";
import "../assets/styles/global.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={strawberryLogo} alt="Feria Kokoro Logo" className="navbar-image-logo" />
        <span className="navbar-logo-text">Feria Kokoro</span>
      </div>
      <div className={`links-container ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="link" onClick={() => setMenuOpen(false)}>INICIO</Link>
        <Link to="/guests" className="link" onClick={() => setMenuOpen(false)}>INVITADOS</Link>
        <Link to="/stands" className="link" onClick={() => setMenuOpen(false)}>STANDS</Link>
        <Link to="/schedule" className="link" onClick={() => setMenuOpen(false)}>CRONOGRAMA</Link>
        <Link to="/contests" className="link" onClick={() => setMenuOpen(false)}>CONCURSOS</Link>
        <Link to="/gallery" className="link" onClick={() => setMenuOpen(false)}>GALERÍA</Link>
      </div>
      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;