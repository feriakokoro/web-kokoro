import React, { useState } from "react";
import { Link } from "react-router-dom";
import strawberryLogo from "../assets/icons/strawberry-logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={strawberryLogo} alt="Feria Kokoro Logo" className="logo" />
          </Link>
          <span className="logo-text">Feria Kokoro</span>
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
    </div>
  );
};

export default Navbar;