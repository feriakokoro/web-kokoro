import React, { useState, useEffect } from "react";

import "../assets/styles/gallery.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";

import galleryService from "../services/gallery";
import LoadingSpinner from "../components/commons/LoadingSpinner";
import { GALLERY, GALLERY_SEARCH_FAIL } from "../utils/constants";

const Gallery = () => {
  const [galleryJson, setGalleryJson] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="page-container">
        <div className="section-container">
          <h1 className="title">{GALLERY.title}</h1>
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="section-container">
        <h1 className="title">{GALLERY.title}</h1>
        <div className="grid">
          {galleryJson.map((element, index) => (
            <img
              key={index}
              src={element.url}
              alt={element.name}
              className="preview"
              onClick={() => handleClick(element)}
              loading="lazy"
            />
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.url}
                alt={selectedImage.name}
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
