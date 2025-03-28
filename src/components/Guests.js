import React, { useState } from "react";
import "./Guests.css";

const invitadosJson = require("../data/guests.json").Invitados;

const Guests = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Obtener todos los tags sin duplicados
  const tags = [...new Set(invitadosJson.flatMap(guest => guest.tags))];

  // Filtrar los invitados según el tag seleccionado
  const filteredGuests = selectedTag 
    ? invitadosJson.filter(guest => guest.tags.includes(selectedTag)) 
    : invitadosJson;

  return (
    <div className="guests-container">
      <h2>Invitados</h2>

      {/* Filtros de Tags */}
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

      {/* Grid de Tarjetas */}
      <div className="grid">
        {filteredGuests.map((guest) => (
          <a
            href={guest.socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={guest.id}
            className="card"
          >
            <img src={guest.image} alt={guest.name} className="image" />
            <h3 className="name">{guest.name}</h3>
            <p className="category">{guest.category}</p>
            <div className="tags-container">
              {guest.days.map((day, index) => (
                <span key={index} className="day-tag">
                  {day}
                </span>
              ))}
            </div>
            <div className="tags-container">
              {guest.tags.map((tag, index) => (
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

export default Guests;
