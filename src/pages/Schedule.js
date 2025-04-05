import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import scheduleData from "../data/schedule.json";
import "../assets/styles/global.css";
import "../assets/styles/schedule.css";
import "../assets/styles/section.css";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const uniqueDays = [...new Set(scheduleData.Cronograma.map(event => event.day))];

  const filteredEvents = selectedDay
    ? scheduleData.Cronograma.filter(event => event.day === selectedDay)
    : scheduleData.Cronograma;

  return (
    <div className="page-container">
      <div className="schedule-section">
        <h1 className="title"> CRONOGRAMA</h1>

        <div className="schedule-category-filters">
          {uniqueDays.map(day => (
            <button
              key={day}
              className={`filter-button ${selectedDay === day ? "active" : ""}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
          <button className="filter-button" onClick={() => setSelectedDay(null)}>
            Mostrar Todo
          </button>
        </div>

        <div className="schedule-list">
          {filteredEvents.map((event, index) => (

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
                  <span key={i} className="tag">{tag}</span>
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
