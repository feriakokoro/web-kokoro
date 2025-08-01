import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "../assets/styles/global.css";
import "../assets/styles/schedule.css";
import "../assets/styles/section.css";

import scheduleService from "../services/schedule";
import Buttons from "../components/Buttons";
import LoadingSpinner from "../components/LoadingSpinner";

import { SCHEDULE_SEARCH_FAIL } from "../utils/constants";

const Schedule = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [scheduleJson, setScheduleJson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setIsLoading(true);
        setError(null);
        const data = await scheduleService.getData();
        setScheduleJson(data);
      } catch (error) {
        setError(SCHEDULE_SEARCH_FAIL);
        console.error(SCHEDULE_SEARCH_FAIL, error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="page-container">
      <div className="schedule-section">
        <h1 className="title"> CRONOGRAMA DE ACTIVIDADES</h1>
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
                <h3 className="schedule-title">
                  {event.title}{" "}
                  {event.participant && event.participant !== "" ? `(${event.participant})` : ""}
                </h3>
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
