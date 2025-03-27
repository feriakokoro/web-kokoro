import React from "react";
import './Inicio.css';

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="heroContent">
          <h1 className="title">🎌 ¡Feria Kokoro 2025! 🎌</h1>
          <p className="subtitle">
            El evento más kawaii de anime, manga, cosplay y cultura geek.  
            🌸 ¡Vive la experiencia única! 🌸
          </p>
          <button className="button">¡Compra tu Entrada!</button>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="info">
        <h2 className="sectionTitle">🎭 Actividades Imperdibles 🎭</h2>
        <ul className="list">
          <li>🌸 Desfile y concursos de Cosplay</li>
          <li>🛍️ Stands con productos exclusivos</li>
          <li>🎤 Invitados especiales y paneles</li>
          <li>🎮 Zona gamer con torneos épicos</li>
          <li>🍜 Gastronomía temática japonesa</li>
        </ul>
      </section>

      {/* Ubicación */}
      <section className="location">
        <h2 className="sectionTitle">📍 Ubicación 📍</h2>
        <p>📅 Fecha: 12 y 13 de Octubre 2025</p>
        <p>📍 Lugar: Centro de Convenciones Kokoro, Buenos Aires</p>
      </section>
    </div>
  );
};

export default Home;
