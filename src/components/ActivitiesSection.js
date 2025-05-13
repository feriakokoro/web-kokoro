import React from "react";
import "../assets/styles/home.css";
import nanaCat from "../assets/images/nana_cat.webp";

const ActivitiesSection = ({ homeActivities = [] }) => {
  if (!Array.isArray(homeActivities) || homeActivities.length === 0) {
    return <p>Próximamente más actividades...</p>;
  }
  return (
    <section id="activities">
      <div className="section-flex-container">
        <div className="section-image">
          <img alt="render-kokoro" src={nanaCat}></img>
        </div>
        <div className="section-text">
          <h2 className="section-title">¿Qué podés hacer?</h2>
          <ul>
            {homeActivities.map((activity, index) => (
              <li key={index} className="activity-item">
                <span>{activity.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
