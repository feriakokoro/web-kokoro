import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "../assets/styles/guests.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";

import guestsService from "../services/guests";
import Buttons from "./Buttons";

const Guests = () => {
  const [guestsJson, setGuestsJson] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    ...new Set(guestsJson.flatMap((guest) => guest.category)),
  ];
  const filteredGuests = selectedCategory
    ? guestsJson.filter((guest) => guest.category.includes(selectedCategory))
    : guestsJson;

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await guestsService.getData();
        if (isMounted) {
          setGuestsJson(data);
        }
      } catch (error) {
        console.error("Error al cargar los datos de los invitados", error);
        if (isMounted) {
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section-container">
      <h2 className="title">INVITADES</h2>
      <Buttons
        tags={categories}
        selectedTag={selectedCategory}
        onTagSelect={setSelectedCategory}
      />
      <div className="grid">
        {filteredGuests.map((guest) => (
          <a
            href={guest.socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={guest.id}
            className="card"
          >
            <img
              src={guest.imageUrl}
              alt={guest.name}
              className="image"
              loading="lazy"
            />
            <h3 className="name">{guest.name}</h3>
            {guest.location && (
              <p className="location">
                <FaMapMarkerAlt className="icon" /> {guest.location}
              </p>
            )}
            <div className="tags-container">
              <span className="tag">{guest.category.toLowerCase()}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Guests;
