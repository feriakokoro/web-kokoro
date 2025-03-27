import React from "react";
import './Inicio.css';

const inicioJson = require("../data/inicio.json");

const ActivitiesList = () => (
  <ul className="list">
    {inicioJson.actividades.map(({ icon, text }, index) => (
      <li key={index} className="activity-item">
        <span className="activity-icon">{icon} {text}</span>
      </li>
    ))}
  </ul>
);

{/*
const ActivitiesList = () => (
  <ul className="list">
    {[
      { icon: '🌸', text: 'Desfile y concursos de Cosplay' },
      { icon: '🛍️', text: 'Stands con productos exclusivos' },
      { icon: '🎤', text: 'Invitados especiales y paneles' },
      { icon: '🎮', text: 'Zona gamer con torneos épicos' },
      { icon: '🍜', text: 'Gastronomía temática japonesa' }
    ].map(({ icon, text }, index) => (
      <li key={index} className="activity-item">
        <span className="activity-icon">{icon} {text}</span>
      </li>
    ))}
  </ul>
);
*/}

const Inicio = () => {

  const handleTicketPurchase = () => {
    window.open('/tickets', '_blank');
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay" aria-hidden="true"></div>
        <div className="heroContent">
          <h1 className="title">🎌 Feria Kokoro 2025 🎌</h1>
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

      {/* Sección de Información */}
      <section className="info">
        <h2 className="sectionTitle">🎭 Actividades Imperdibles 🎭</h2>
        <ActivitiesList />
      </section>

      {/* Ubicación */}
      <section className="location">
        <h2 className="sectionTitle">📍 Ubicación 📍</h2>
        <div className="location-details">
          <p>
            <span aria-label="Fecha del evento">📅 </span> 
            Fecha: {inicioJson.ubicacion.fecha}
          </p>
          <p>
            <span aria-label="Lugar del evento">📍</span> 
            Lugar: {inicioJson.ubicacion.lugar}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Inicio;