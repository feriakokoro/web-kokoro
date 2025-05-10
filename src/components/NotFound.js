import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/not_found.css";
import "../assets/styles/home.css";
// import kiwiFondo from "../assets/images/KIWI_FONDO.webp";
import notFoundImg from "../assets/images/404.webp";

const NotFound = () => {
  return (
    <div className="page-container">
      <img alt="not-found" src={notFoundImg} className="not-found-image" />
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <div className="not-found-button-container">
          <Link to="/" className="button" aria-label="Volver al inicio">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
