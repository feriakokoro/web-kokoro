import React from "react";
import "../assets/styles/home.css";
import Modal from "./Modal";

const HeroSection = ({ earlyTicket = {} }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  
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
          onClick={handleModalOpen}
          aria-label="Comprar entrada para Feria Kokoro"
        >
          ¡Participa!
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>¡Bienvenides a Feria Kokoro: {earlyTicket.title}!</h2>
        <p>
          Precio de la entrada anticipada: {earlyTicket.price} en efectivo
        </p>
        <p>Lugar: {earlyTicket.place}</p>
        <p>Con tu entrada obtenés {earlyTicket.promotion}.</p>
      </Modal>
    </section>
  );
};

export default HeroSection;
