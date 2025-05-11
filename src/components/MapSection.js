import React from "react";
import "../assets/styles/home.css";
import PropTypes from "prop-types";

const MapSection = ({ mapJson = {} }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(mapJson.url);
      if (!response.ok) throw new Error("Error al descargar el archivo");
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = mapJson.name || "mapa-kokoro.webp";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error en la descarga:", error);
    }
  };

  return (
    <section id="map">
      <div className="section-flex-container">
        <div className="section-map">
          <img alt={mapJson.name} src={mapJson.previewUrl}></img>
          <button
            className="filter-button"
            aria-label="Descargar mapa"
            onClick={handleDownload}
          >
            Descargar
          </button>
        </div>
        <div className="section-text">
          <h2>Mapa Kokoro</h2>
          <p>
            Descargá nuestro Mapa Kokoro haciendo clic en el botón "Descargar".
            Con esta guía visual podrás explorar de forma sencilla los caminos y
            conceptos clave de nuestra propuesta.
          </p>
        </div>
      </div>
    </section>
  );
};

MapSection.propTypes = {
  mapJson: PropTypes.shape({
    url: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MapSection;
