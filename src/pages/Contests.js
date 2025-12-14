import React, { useState, useEffect } from "react";
import "../assets/styles/contests.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";
import "../assets/styles/contest_card.css";

import LoadingSpinner from "../components/LoadingSpinner";
import activityService from "../services/activity";
import sectionSetupService from "../services/sectionSetup";
import Buttons from "../components/Buttons";

import { CONTEST_SEARCH_FAIL } from "../utils/constants";

const Contests = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activityJson, setActivityJson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sectionSetup, setSectionSetup] = useState(null);

  const fetchSectionSetup = async () => {
    try {
      const data = await sectionSetupService.getData();
      setSectionSetup(data);
    } catch (err) {
      console.error("Error al cargar la configuración de la sección:", err);
    }
  };

  useEffect(() => {
    fetchSectionSetup();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await activityService.getData();
        setActivityJson(data);
      } catch (error) {
        setError(CONTEST_SEARCH_FAIL);
        console.error(CONTEST_SEARCH_FAIL, error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = [
    ...new Set(
      activityJson
        .flatMap((activity) => activity.cardDetails.category)
        .filter(Boolean)
    ),
  ];

  const filteredActivities = selectedCategory
    ? activityJson.filter((activity) =>
        activity.cardDetails.category.includes(selectedCategory)
      )
    : activityJson;

  const handleContestClick = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  const buildActivityModalExhibitors = (modalTitle, exhibitors) => {
    if (exhibitors.length === 0) {
      return;
    }
    return (
      <div className="contest-section">
        <h3>{modalTitle}</h3>
        {exhibitors.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
    );
  };

  const buildActivityDescription = (modalTitle, activityData) => {
    if (activityData.length === 0) {
      return;
    }
    return (
      <div className="contest-section">
        <h3>{modalTitle}</h3>
        {activityData.map((data, index) => (
          <p>{data}</p>
        ))}
      </div>
    );
  };

  if (isLoading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="page-container">
        <div className="section-container">
          <h1 className="title">ACTIVIDADES</h1>
          <div className="error-message">{error}</div>
        </div>
      </div>
    );

  if (sectionSetup && !sectionSetup.activitiesEnabled) {
    return (
      <div className="page-container">
        <div className="section-container">
          <h1 className="title">ACTIVIDADES</h1>
          <div className="error-message">
            Prontro tendremos nuestra lista de actividades para el evento.
          </div>
          <br></br>
          <div className="error-message">(づ๑•ᴗ•๑)づ♡</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="section-container">
        <h1 className="title">ACTIVIDADES</h1>
        <Buttons
          tags={categories}
          selectedTag={selectedCategory}
          onTagSelect={setSelectedCategory}
        />
        <div className="contests-grid">
          {filteredActivities.map((activity, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleContestClick(activity)}
            >
              <img
                src={activity.cardDetails.urlImage}
                alt=""
                className="image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {selectedActivity && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content activity"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-button"
                onClick={closeModal}
                aria-label="Cerrar modal"
              >
                &times;
              </button>

              <div className="modal-header">
                <h2>{selectedActivity.content.title}</h2>
              </div>

              {buildActivityDescription(
                "Descripción",
                selectedActivity.content.descriptions
              )}
              {buildActivityModalExhibitors(
                "Exhibidores",
                selectedActivity.content.exhibitors
              )}

              <div className="contest-section">
                <h3>Ubicación</h3>
                <p>{selectedActivity.content.location}</p>
              </div>

              <div className="contest-section">
                <h3>Cupo</h3>
                <p>
                  Capacidad limitada hasta {selectedActivity.content.capacity}{" "}
                  personas
                </p>
              </div>
              <div className="modal-action-buttons">
                {selectedActivity.content.urlPost &&
                  selectedActivity.content.urlPost.trim() !== "" && (
                    <a
                      href={selectedActivity.content.urlPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="filter-button primary"
                    >
                      Ver publicación original
                    </a>
                  )}
                {selectedActivity.content.urlForm &&
                  selectedActivity.content.urlForm.trim() !== "" && (
                    <a
                      href={selectedActivity.content.urlForm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="filter-button secondary"
                    >
                      Ir al formulario
                    </a>
                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;
