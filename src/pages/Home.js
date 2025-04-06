import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/home.css";

import homeJson from "../data/home.json";

const pastEventsJson = homeJson.pastEvents;
const newsJson = homeJson.news;

const buildNewsGrid = (imagesJson) => {
  return (
    <div className="grid">
      {imagesJson.map((image) => (
        <div className="card">
          <img className="image" src={image.url} alt=""></img>
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

const buildCarousel = (imagesJson) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop
      autoPlay
    >
      {imagesJson.map((image) => (
        <div>
          <img src={image.url} alt={image.description}></img>
        </div>
      ))}
    </Carousel>
  );
};

const handleTicketPurchase = () => {
  window.open("/tickets", "_blank");
};

const Home = () => {
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
        <div className="section-flex-container">
          <div className="section-image">
            <img src="https://animangapop.co.uk/wp-content/uploads/2024/03/3_rev-2.png"></img>
          </div>
          <div className="section-text">
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
      <section id="news">
        <div className="section-flex-container">
          <div className="section-text">
            <h2>Novedades</h2>
          </div>
          {buildNewsGrid(newsJson)}
        </div>
      </section>
      <section id="past-events">
        <div className="section-flex-container">
          <div className="section-text">
            <h2>Momentos kawaii</h2>
            <p>
              Cálido, inclusivo y lleno de emoción. Ideal si querés conectar con
              quienes ya participaron antes.
            </p>
          </div>
          <div className="past-events-image">
            {buildCarousel(pastEventsJson)}
          </div>
        </div>
      </section>
      <section id="location">
        <div className="section-flex-container">
          <div className="location-map">
            <div className="map-container">
              <iframe
                src={homeJson.ubicacion.url}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="section-text">
            <h2 className="section-title">Ubicación</h2>
            <p>Fecha: {homeJson.ubicacion.fecha}</p>
            <p>Lugar: {homeJson.ubicacion.lugar}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
