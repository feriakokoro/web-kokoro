import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "../assets/styles/global.css";
import "../assets/styles/schedule.css";
import "../assets/styles/section.css";

import scheduleJson from "../data/schedule.json";

const Schedule = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    ...new Set(
      scheduleJson.Cronograma.flatMap((scheduleData) => scheduleData.category)
    ),
  ];

  const filteredCategories = selectedCategory
    ? scheduleJson.Cronograma.filter(
        (scheduleData) => scheduleData.category === selectedCategory
      )
    : scheduleJson.Cronograma;

  return (
    <div className="page-container">
      <div className="schedule-section">
        <h1 className="title"> CRONOGRAMA</h1>
        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
            >
              {category}
            </button>
          ))}
        </div>
        <div className="schedule-list">
          {filteredCategories.map((event, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-header">
                <p className="schedule-time">{event.time}</p>
                <h3 className="schedule-title">{event.title}</h3>
              </div>
              <div className="schedule-details">
                <p className="schedule-day">{event.day}</p>
                <p className="schedule-location">
                  <FaMapMarkerAlt className="location-icon" />
                  {event.location}
                </p>
              </div>
              <div className="schedule-tags">
                {event.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
