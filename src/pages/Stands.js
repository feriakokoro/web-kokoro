import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import "../assets/styles/stands.css";
import standsService from "../services/stands";

const Stands = () => {
  const [standsJson, setStandsJson] = useState([]);

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
      <div className="grid">
        {standsJson
          .filter((stand) => stand.estado === "Aprobado")
          .map((stand, index) => (
            <div className="card" key={index}>
              <img src={stand.imagen} alt={stand.nombre} className="image" />
              <h2 className="stand-name">{stand.nombre}</h2>
              <p className="stand-location">
                <FaMapMarkerAlt className="icon" /> {stand.ubicacion}
              </p>
              <a
                href={stand.redes}
                target="_blank"
                rel="noopener noreferrer"
                className="stand-link"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Stands;
