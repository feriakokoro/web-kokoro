import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "../assets/styles/global.css";
import "../assets/styles/schedule.css";
import "../assets/styles/section.css";

import scheduleService from "../services/schedule";
import Buttons from "../components/Buttons";

const Schedule = () => {
  const SCHEDULE_SEARCH_FAIL = "Error al cargar el cronograma";
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [scheduleJson, setScheduleJson] = useState([]);
  const categories = [
    ...new Set(scheduleJson.flatMap((scheduleData) => scheduleData.category)),
  ];

  const filteredCategories = selectedCategory
    ? scheduleJson.filter(
        (scheduleData) => scheduleData.category === selectedCategory
      )
    : scheduleJson;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setScheduleJson(await scheduleService.getData());
      } catch (error) {
        console.error(SCHEDULE_SEARCH_FAIL, error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-container">
      <div className="schedule-section">
        <h1 className="title"> CRONOGRAMA</h1>
        <Buttons
          tags={categories}
          selectedTag={selectedCategory}
          onTagSelect={setSelectedCategory}
        />
        <div className="schedule-grid">
          {filteredCategories.map((event, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-time">
                <p className="time">{event.time}</p>
                <p className="day">{event.day}</p>
              </div>

              <div className="schedule-info">
                <h3 className="schedule-title">{event.title}</h3>
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
