import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/styles/stands.css";
import standsService from "../services/stands";

const Stands = () => {
  const [standsJson, setStandsJson] = useState([]);

  const [selectedTag, setSelectedTag] = useState(null);

  const tags = [...new Set(standsJson.flatMap((stand) => stand.tags))];

  const filteredStands = selectedTag
    ? standsJson.filter((stand) => stand.tags.includes(selectedTag))
    : standsJson;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStandsJson(await standsService.getData());
      } catch (error) {
        console.error("Error al cargar la galería:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section-container">
      <h1 className="title">STANDS</h1>
      <div className="filters">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-button ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredStands
          .filter((stand) => stand.status === "Aprobado")
          .map((stand, index) => (
            <a
              href={stand.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={stand.image} alt={stand.name} className="image" />
              <h2 className="stand-name">{stand.name}</h2>
              <p className="stand-location">
                <FaMapMarkerAlt className="icon" /> {stand.location}
              </p>
              <div className="tags-container">
                {stand.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Stands;
