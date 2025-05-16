import React, { useState, useEffect } from "react";
import "../assets/styles/gallery.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";
import galleryService from "../services/gallery";
import LoadingSpinner from "../components/LoadingSpinner";

const Gallery = () => {
  const GALLERY_SEARCH_FAIL = "Error al cargar la galería:";
  const [galleryJson, setGalleryJson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setError(null);
        const data = await galleryService.getData();
        if (isMounted) {
          setGalleryJson(data);
          setIsLoading(false);
        }
      } catch (error) {
        setError(GALLERY_SEARCH_FAIL);
        console.error(GALLERY_SEARCH_FAIL, error);
        if (isMounted) {
          setIsLoading(false);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="page-container">
      <div className="section-container">
        <h1 className="title">GALERÍA</h1>
        <div className="gallery-grid">
          {galleryJson.map((element, index) => (
            <img
              key={index}
              src={element.url}
              alt={element.name}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
