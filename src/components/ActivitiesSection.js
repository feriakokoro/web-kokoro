import React from "react";
import "../assets/styles/home.css";
import "../assets/styles/section_container.css";
import nanaCat from "../assets/images/nana_cat2.webp";
import { HOME_ACTIVITY_SECTION } from "../utils/constants";

const activities = require("../data/activities.json");

const ActivitiesSection = () => {
  return (
    <section id="activities">
      <div className="flex-container">
        <img className="flex-img" alt="render-kokoro" src={nanaCat}></img>
        <div className="flex-container-text">
          <h2>{HOME_ACTIVITY_SECTION.title}</h2>
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
