import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/styles/stands.css";
import standsService from "../services/stands";
import Buttons from "./Buttons";

const Stands = () => {
  const [standsJson, setStandsJson] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  // Extraer categorías únicas para usar como tags
  const tags = [...new Set(standsJson.map((stand) => stand.category))];

  // Filtrar stands por categoría seleccionada
  const filteredStands = selectedTag
    ? standsJson.filter((stand) => stand.category === selectedTag)
    : standsJson;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await standsService.getData();
        setStandsJson(data);
      } catch (error) {
        console.error("Error al cargar los stands:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section-container">
      <h1 className="title">STANDS</h1>
      <Buttons
        tags={tags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      <div className="grid">
        {filteredStands.map((stand, index) => (
          <a
            key={`${stand.name}-${index}`}
            href={stand.socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img
              src={stand.imageUrl}
              alt={stand.name}
              className="image"
              loading="lazy"
            />
            <h2 className="stand-name">{stand.name}</h2>
            <p className="stand-location">
              <FaMapMarkerAlt className="icon" /> {stand.location}
            </p>
            {/*<div className="tags-container">
              <span className="tag">{stand.category}</span>
            </div>*/}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Stands;
