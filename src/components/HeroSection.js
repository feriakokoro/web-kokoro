import React from "react";
import "../assets/styles/home.css";
import Modal from "./Modal";

const HeroSection = () => {
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
        <h2>¡Bienvenido a Feria Kokoro 2025!</h2>
        <p>Precio de la entrada: $3.000 en efectivo</p>
        <p>Lugar: Lavalle 1330 Piso 1 Dto 3</p>
        <p>Con tu entrada obtenés Photocards Exclusivas el día del evento.</p>
      </Modal>
    </section>
  );
};

export default HeroSection;
