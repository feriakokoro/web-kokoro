import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMask,
  faPaintBrush,
  faMicrophone,
  faMusic,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/contests.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";

const activitiesData = require("../data/activities.json");

const iconMap = {
  "fa-mask": faMask,
  "fa-paint-brush": faPaintBrush,
  "fa-microphone": faMicrophone,
  "fa-music": faMusic,
  "fa-book": faBook,
};

const buildActivityModal = (modalTitle, activityData) => {
  if (activityData.length === 0) {
    return;
  }
  return (
    <div className="contest-section">
      <h3>{modalTitle}</h3>
      <ul>
        {activityData.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
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

const Contests = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleContestClick = (contest) => {
    setSelectedActivity(contest);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <div className="page-container">
      <div className="section-container">
        <h1 className="title">ACTIVIDADES</h1>
        <div className="contests-grid">
          {activitiesData.map((activity) => (
            <div
              className="contest-card"
              onClick={() => handleContestClick(activity)}
            >
              <div className="contest-title">
                <FontAwesomeIcon
                  icon={iconMap[activity.cardDetails.icon]}
                  className="contest-icon"
                />
                <h2 className="contest-title">{activity.cardDetails.title}</h2>
                <p className="contest-tags">
                  {activity.tags.map((tag, index) => (
                    <span key={index} className="contest-tag">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
              <div className="contest-content">
                <h3 className="contest-title">Inscripción</h3>
                <p className="contest-description">
                  {activity.cardDetails.registrationDate}
                </p>
                <h3 className="contest-title">Capacidad</h3>
                <p className="contest-description">
                  {activity.capacity} personas
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedActivity && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedActivity.cardDetails.title}</h2>
              </div>
              {buildActivityDescription(
                "Descripcion",
                selectedActivity.descriptions
              )}
              {buildActivityModal("Exhibidores", selectedActivity.exhibitors)}
              <p>CAPACIDAD LIMITADA {selectedActivity.capacity} PERSONAS</p>
              <button className="filter-button" onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;
