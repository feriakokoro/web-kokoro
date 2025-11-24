import React, { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/styles/guests.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";
import guestsService from "../services/guests";
import sectionSetupService from "../services/sectionSetup";
import Buttons from "./Buttons";
import LoadingSpinner from "./LoadingSpinner";
import { API_CONFIG, GUESTS } from "../utils/constants";

const Guests = () => {
  const [guestsJson, setGuestsJson] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sectionSetup, setSectionSetup] = useState(null);

  const categories = [
    ...new Set(guestsJson.flatMap((guest) => guest.category)),
  ];
  const filteredGuests = selectedCategory
    ? guestsJson.filter((guest) => guest.category.includes(selectedCategory))
    : guestsJson;

  const fetchSectionSetup = useCallback(async () => {
    try {
      const data = await sectionSetupService.getData();
      setSectionSetup(data);
    } catch (err) {
      console.error("Error al cargar la configuración de la sección:", err);
    }
  }, []);

  useEffect(() => {
    fetchSectionSetup();
  }, [fetchSectionSetup]);
  

  const fetchWithRetry = useCallback(async (attempt = 1) => {
    try {
      const data = await guestsService.getData();
      setGuestsJson(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      console.error(`Error al cargar los invitados (intento ${attempt}):`, err);

      if (attempt < API_CONFIG.MAX_RETRIES) {
        const delay = API_CONFIG.INITIAL_RETRY_DELAY * Math.pow(2, attempt - 1);
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
    return (<div className="section-container">
      <h2 className="title">{GUESTS.title}</h2>
      <div className="error-message">{error}</div>
    </div>);
  }

  if (sectionSetup && !sectionSetup.guestsEnabled) {
    return (<div className="section-container">
      <h2 className="title">{GUESTS.title}</h2>
      <div className="error-message">Estamos trabajando para tener lista esta sección.</div>
      <br></br>
      <div className="error-message">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</div>
    </div>);
  }

  return (
    <div className="section-container">
      <h2 className="title">{GUESTS.title}</h2>
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
              <p className="guest-location">
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
