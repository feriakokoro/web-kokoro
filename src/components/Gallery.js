import React from "react";
import "./gallery.css";
import "./global.css";
import "./section.css";

const galleryJson = require("../data/gallery.json").Gallery;

const Gallery = () => {
    return (
        <div className="page-container">
            <div className="section-container">
                <h1 className="title">GALERÍA</h1>
                <div className="gallery-grid">
                    {
                        galleryJson.map((element, index) => (
                            <img 
                                key={index} 
                                src={element.url} 
                                alt={`Imagen ${index + 1}`} 
                                className="gallery-image"
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Gallery;
