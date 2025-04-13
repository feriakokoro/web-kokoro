import React, { useState, useEffect } from "react";

import "../assets/styles/guests.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";

import guestsService from "../services/guests";

const Guests = () => {
  const [guestsJson, setGuestsJson] = useState([]);

  const [selectedTag, setSelectedTag] = useState(null);

  const tags = [...new Set(guestsJson.flatMap((guest) => guest.tags))];

  const filteredGuests = selectedTag
    ? guestsJson.filter((guest) => guest.tags.includes(selectedTag))
    : guestsJson;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setGuestsJson(await guestsService.getData());
      } catch (error) {
        console.error("Error getting gallery data", error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="section-container">
        <h2 className="title">INVITADOS</h2>

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
