import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/home.css";
import "../assets/styles/past_events.css";

import { PAST_EVENTS } from "../utils/constants";

const buildCarousel = (imagesJson) => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop
        autoPlay
      >
        {imagesJson.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.url} alt={image.description} loading="lazy"></img>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const PastEventsSection = ({ pastEventsJson = [] }) => {
  return (
    <section id="past-events">
      <div className="section-flex-container">
        <div className="section-text">
          <h2>{PAST_EVENTS.title}</h2>
          <p>{PAST_EVENTS.description}</p>
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
