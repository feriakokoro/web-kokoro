import React, { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "../assets/styles/guests.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";

import guestsService from "../services/guests";
import Buttons from "./Buttons";
import LoadingSpinner from "./LoadingSpinner";

const MAX_RETRIES = 3;
const INITIAL_DELAY = 1000;

const Guests = () => {
  const [guestsJson, setGuestsJson] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    ...new Set(guestsJson.flatMap((guest) => guest.category)),
  ];
  const filteredGuests = selectedCategory
    ? guestsJson.filter((guest) => guest.category.includes(selectedCategory))
    : guestsJson;

  const fetchWithRetry = useCallback(async (attempt = 1) => {
    try {
      const data = await guestsService.getData();
      setGuestsJson(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      console.error(`Error al cargar los invitados (intento ${attempt}):`, err);

      if (attempt < MAX_RETRIES) {
        const delay = INITIAL_DELAY * Math.pow(2, attempt - 1);
        console.log(`Reintentando en ${delay}ms...`);

        setTimeout(() => {
          fetchWithRetry(attempt + 1);
        }, delay);
      } else {
        setError(
          "No se pudieron cargar los invitados después de varios intentos"
        );
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchWithRetry();
  }, [fetchWithRetry]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="section-container">
      <h2 className="title">INVITADES</h2>
      <Buttons
        tags={categories}
        selectedTag={selectedCategory}
        onTagSelect={setSelectedCategory}
      />
      <div className="grid">
        {filteredGuests.map((guest, index) => (
          <a
            href={guest.socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
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
