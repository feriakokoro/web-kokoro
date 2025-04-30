import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/styles/stands.css";
import standsService from "../services/stands";
import Buttons from "./Buttons";

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
      <Buttons
        tags={tags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
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
              <img
                src={stand.image}
                alt={stand.name}
                className="image"
                loading="lazy"
              />
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
