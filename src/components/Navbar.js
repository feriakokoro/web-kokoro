import React, { useState } from "react";
import { Link } from "react-router-dom";
import kokoroLogo from "../assets/icons/logo_kokoro.webp";
import "../assets/styles/navbar.css";
import "../assets/styles/global.css";
import { routes } from "../config/routes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" aria-label="Barra de navegación principal">
      <div className="navbar-logo-container">
        <img
          src={kokoroLogo}
          alt="Feria Kokoro Logo"
          className="navbar-image-logo"
        />
        <span className="navbar-logo-text">Feria Kokoro</span>
      </div>
      <div className={`links-container ${menuOpen ? "active" : ""}`}>
        {routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className="link"
            onClick={() => setMenuOpen(false)}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
