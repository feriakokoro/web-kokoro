import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/home.css";

const NewsSection = ({ newsJson = [] }) => {
  if (!Array.isArray(newsJson) || newsJson.length === 0) {
    return <p>No hay novedades disponibles en este momento.</p>;
  }

  return (
    <section id="news">
      <div className="section-flex-container">
        <div className="section-text">
          <h2>Novedades</h2>
        </div>
        <div className="grid">
          {newsJson.map((image, index) => (
            <a
              href={image.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="card"
            >
                <img className="grid-image" src={image.imageUrl} alt=""></img>
                <h2 className="news-title">{image.title}</h2>
                <p className="news-text">{image.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

NewsSection.propTypes = {
  newsJson: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default NewsSection;
