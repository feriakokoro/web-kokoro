import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/home.css";

const buildCarousel = (imagesJson) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop
      autoPlay
    >
      {imagesJson.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.description}></img>
        </div>
      ))}
    </Carousel>
  );
};

const PastEventsSection = ({ pastEventsJson = [] }) => {
  return (
    <section id="past-events">
      <div className="section-flex-container">
        <div className="section-text">
          <h2>Recuerdos Kokoro</h2>
          <p>
            Cálido, inclusivo y lleno de emoción. Ideal si querés conectar con
            quienes ya participaron antes.
          </p>
        </div>
        <div className="past-events-image">{buildCarousel(pastEventsJson)}</div>
      </div>
    </section>
  );
};

PastEventsSection.propTypes = {
  pastEventsJson: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default PastEventsSection;
