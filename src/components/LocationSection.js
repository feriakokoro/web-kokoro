import React from "react";
import "../assets/styles/home.css";
import PropTypes from "prop-types";

const LocationSection = ({ locationJson = {} }) => {
  if (!locationJson?.url || !locationJson?.date || !locationJson?.place) {
    console.log("LocationSection", "No data to display");
    return null;
  }
  return (
    <section id="location">
      <div className="section-flex-container">
        <div className="location-map">
          <div className="map-container">
            <iframe
              src={locationJson.url}
              title="colegio san jose"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
        <div className="section-text">
          <h2 className="section-title">Ubicación</h2>
          <p>Fecha: {locationJson.date}</p>
          <p>Lugar: {locationJson.place}</p>
        </div>
      </div>
    </section>
  );
};

LocationSection.propTypes = {
  locationJson: PropTypes.shape({
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
  }).isRequired,
};

export default LocationSection;
