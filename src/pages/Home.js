import React from "react";
import "../assets/styles/home.css";

const inicioJson = require("../data/home.json");

const Home = () => {
  const handleTicketPurchase = () => {
    window.open("/tickets", "_blank");
  };

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1 className="home-title">Feria Kokoro 2025</h1>
          <p className="subtitle">
            El evento más kawaii de anime, manga, cosplay y cultura geek
          </p>
          <button
            className="button"
            onClick={handleTicketPurchase}
            aria-label="Comprar entrada para Feria Kokoro"
          >
            ¡Compra tu Entrada!
          </button>
        </div>
      </section>

      <section id="activities">
        <div className="activities-container">
          <div className="activities-image">
            <img src="https://animangapop.co.uk/wp-content/uploads/2024/03/3_rev-2.png"></img>
          </div>
          <div className="activities-text">
            <h2 className="section-title">¿Qué podés hacer?</h2>
            <ul>
              <li className="activity-item">
                <span>Comprar productos handmade kawaii</span>
              </li>
              <li className="activity-item">
                <span>Participar de concursos de cosplay</span>
              </li>
              <li className="activity-item">
                <span>Talleres de dibujo y arte anime</span>
              </li>
              <li className="activity-item">
                <span>Sacarte fotos en espacios temáticos</span>
              </li>
              <li className="activity-item">
                <span>Karaoke con openings de tus animes favoritos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="location">
        <div className="location-container">
          <div className="location-map">
            <div class="map-container">
              <iframe
                src={inicioJson.ubicacion.url}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="location-text">
            <h2 className="section-title">Ubicación</h2>
            <p>Fecha: {inicioJson.ubicacion.fecha}</p>
            <p>Lugar: {inicioJson.ubicacion.lugar}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
