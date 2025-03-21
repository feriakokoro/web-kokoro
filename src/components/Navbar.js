import React from "react";
import { Link } from "react-router-dom";

import strawberryLogo from "../assets/strawberry-logo.webp";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <img src={strawberryLogo} alt="Feria Kokoro Logo" style={styles.logo} />
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>INICIO</Link>
        <Link to="/guests" style={styles.link}>INVITADOS</Link>
        <Link to="/stands" style={styles.link}>STANDS</Link>
        <Link to="/schedule" style={styles.link}>CRONOGRAMA</Link>
        <Link to="/contests" style={styles.link}>CONCURSOS</Link>
        <Link to="/about" style={styles.link}>MAS INFORMACION</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f9c8d7",
    color: "#333",
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "20px",
  },
  linksContainer: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
