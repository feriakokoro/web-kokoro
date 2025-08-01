import React from "react";
import "../assets/styles/home.css";
import nanaCat from "../assets/images/nana_cat2.webp";
import { HOME_ACTIVITY_SECTION } from "../utils/constants";

const activities = require("../data/activities.json");

const ActivitiesSection = () => {
  return (
    <section id="activities">
      <div className="section-flex-container">
        <div className="section-image">
          <img alt="render-kokoro" src={nanaCat}></img>
        </div>
        <div className="section-text">
          <h2 className="section-title">{HOME_ACTIVITY_SECTION.title}</h2>
          <ul>
            {activities.map((activity, index) => (
              <li key={index} className="activity-item">
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
