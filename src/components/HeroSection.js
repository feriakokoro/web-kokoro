import React from "react";
import "../assets/styles/home.css";
import Modal from "./Modal";
import { HERO_SECTION } from "../utils/constants";

const HeroSection = ({ earlyTicket = {} }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  {
    /*
        <h2>¡Bienvenides a Feria Kokoro: {earlyTicket.title}!</h2>
        <p>
          Precio de la entrada anticipada: {earlyTicket.price} en efectivo
        </p>
        <p>Lugar: {earlyTicket.place}</p>
        <p>Con tu entrada obtenés {earlyTicket.promotion}.</p>
        <h2>¡Bienvenides a Feria Kokoro: {earlyTicket.title}!</h2>
        <p>
          Precio de la entrada anticipada: {earlyTicket.price} en efectivo
        </p>
        <p>Lugar: {earlyTicket.place}</p>
        <p>Con tu entrada obtenés {earlyTicket.promotion}.</p>
    */
  }

  return (
    <section className="hero">
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <h1 className="home-title">{HERO_SECTION.title}</h1>
        <p className="subtitle">{HERO_SECTION.subtitle}</p>
        <button
          className="button"
          onClick={handleModalOpen}
          aria-label="Comprar entrada para Feria Kokoro"
        >
          ¡Participa!
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>¡Bienvenides a Feria Kokoro: Edición Felices Fiestas!</h2>
        <p>Nuestra próxima edición está en camino.</p>
        <p>
          Te esperamos el Domingo 14 de Diciembre, 12 a 19 hs, en el Colegio San
          José.
        </p>
        <p>Pronto toda la info acá.</p>
        <p>
          También podés seguirnos en{" "}
          <a href="https://www.instagram.com/feriakokoro/" target="_blank">
            @feriakokoro
          </a>{" "}
          para no perderte nada.
        </p>
      </Modal>
    </section>
  );
};

export default HeroSection;
