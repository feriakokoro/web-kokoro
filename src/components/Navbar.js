import React from "react";
import { Link } from "react-router-dom";
import strawberryLogo from "../assets/icons/strawberry-logo.webp";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
    <nav className="navbar">
      <div className="logo-container">
        <img src={strawberryLogo} alt="Feria Kokoro Logo" className="logo" />
        <span className="logo-text">Feria Kokoro</span>
      </div>
      <div className="links-container">
        <Link to="/" className="link">INICIO</Link>
        <Link to="/guests" className="link">INVITADOS</Link>
        <Link to="/stands" className="link">STANDS</Link>
        <Link to="/schedule" className="link">CRONOGRAMA</Link>
        <Link to="/contests" className="link">CONCURSOS</Link>
        <Link to="/about" className="link">MAS INFORMACION</Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
