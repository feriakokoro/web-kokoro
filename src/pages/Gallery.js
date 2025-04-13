import React, { useState, useEffect } from "react";
import "../assets/styles/gallery.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";
import galleryService from "../services/gallery";

const Gallery = () => {

  const [galleryJson, setGalleryJson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await galleryService.getData();
        setGalleryJson(data);
      } catch (error) {
        console.error("Error al cargar la galería:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-container">
      <div className="section-container">
        <h1 className="title">GALERÍA</h1>
        <div className="gallery-grid">
          {galleryJson.map((element, index) => (
            <img
              key={index}
              src={element.url}
              alt={`Imagen ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
