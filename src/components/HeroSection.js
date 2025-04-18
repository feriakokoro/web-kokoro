import React from "react";
import "../assets/styles/home.css";


const handleTicketPurchase = () => {
  window.open("/tickets", "_blank");
};

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <h1 className="home-title">Feria Kokoro 2025</h1>
        <p className="subtitle">
          Un espacio cultural que celebra el arte en todas sus formas
        </p>
        <button
          className="button"
          onClick={handleTicketPurchase}
          aria-label="Comprar entrada para Feria Kokoro"
        >
          ¡Participa!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;