import React, { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/styles/stands.css";
import standsService from "../services/stands";
import Buttons from "./Buttons";
import LoadingSpinner from "./LoadingSpinner";
import { STANDS } from "../utils/constants";

const MAX_RETRIES = 5;
const INITIAL_DELAY = 2000;

const Stands = () => {
  const [standsJson, setStandsJson] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const tags = [...new Set(standsJson.map((stand) => stand.category))];

  const filteredStands = selectedTag
    ? standsJson.filter((stand) => stand.category === selectedTag)
    : standsJson;

  const fetchWithRetry = useCallback(async (attempt = 1) => {
    try {
      const data = await standsService.getData();
      setStandsJson(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      console.error(`Error loading stands (attempt ${attempt}):`, err);

      if (attempt < MAX_RETRIES) {
        const delay = INITIAL_DELAY * Math.pow(2, attempt - 1);
        console.log(`Retrying in ${delay}ms...`);

        setTimeout(() => {
          fetchWithRetry(attempt + 1);
        }, delay);
      } else {
        setError("No se pudieron cargar los stands después de varios intentos");
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
    return <div className="error">{error}</div>;
  }

  return (
    <div className="section-container">
      <h1 className="title">{STANDS.title}</h1>
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Stands;
