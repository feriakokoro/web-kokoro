import React, { useState, useEffect } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/contests.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";

import LoadingSpinner from "../components/LoadingSpinner";
import activityService from "../services/activity";
//import { iconMap } from "../utils/iconMap";
import Buttons from "../components/Buttons";

const Contests = () => {
  const CONTEST_SEARCH_FAIL = "Error al cargar la info";
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activityJson, setActivityJson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      activityJson.flatMap((activity) => activity.tags).filter(Boolean)
    ),
  ];

  const filteredActivities = selectedCategory
    ? activityJson.filter((activity) =>
        activity.tags.includes(selectedCategory)
      )
    : activityJson;

  const handleContestClick = (contest) => {
    setSelectedActivity(contest);
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
  if (error) return <div className="error-message">{error}</div>;
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
              className="contest-card"
              onClick={() => handleContestClick(activity)}
            >
              <div className="contest-title">
                <img
                  src={activity.cardDetails.urlImage}
                  alt=""
                  className="image"
                  loading="lazy"
                />

                {/*}
                <h2 className="contest-title">{activity.cardDetails.title}</h2>
                */}

                {/*}
                <p className="contest-tags">
                  {activity.tags.map((tag, index) => (
                    <span key={index} className="contest-tag">
                      {tag}
                    </span>
                  ))}
                </p>
                */}
              </div>

              <div className="contest-content">
                {/*
                <h3 className="contest-title">Inscripción</h3>
                <p className="contest-description">
                  {activity.cardDetails.registrationDate}
                </p>

                <h3 className="contest-title">Cupo</h3>
                <p className="contest-description">
                  Hasta {activity.capacity} personas
                </p>
                */}
              </div>
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
                <h2>{selectedActivity.cardDetails.title}</h2>
              </div>

              {buildActivityDescription(
                "Descripcion",
                selectedActivity.descriptions
              )}
              {buildActivityModalExhibitors(
                "Exhibidores",
                selectedActivity.exhibitors
              )}

              <div className="contest-section">
                <h3>Ubicación</h3>
                <p>{selectedActivity.location}</p>
              </div>

              <div className="contest-section">
                <h3>Cupo</h3>
                <p>
                  Capacidad limitada hasta {selectedActivity.capacity} personas
                </p>
              </div>
              <div className="modal-action-buttons">
                {selectedActivity.urlPost &&
                  selectedActivity.urlPost.trim() !== "" && (
                    <a
                      href={selectedActivity.urlPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="filter-button primary"
                    >
                      Ver publicación original
                    </a>
                  )}
                {selectedActivity.urlForm &&
                  selectedActivity.urlForm.trim() !== "" && (
                    <a
                      href={selectedActivity.urlForm}
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
