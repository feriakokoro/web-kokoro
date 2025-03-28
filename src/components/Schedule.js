import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Ícono de ubicación
import scheduleData from "../data/schedule.json"; // Importa tu JSON

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  // Extraer días únicos
  const uniqueDays = [...new Set(scheduleData.Cronograma.map(event => event.day))];

  // Filtrar eventos por día seleccionado
  const filteredEvents = selectedDay
    ? scheduleData.Cronograma.filter(event => event.day === selectedDay)
    : scheduleData.Cronograma;

  return (
    <div className="schedule-container">
      <h1 className="title">CRONOGRAMA</h1>

      {/* Botones de filtro por día */}
      
      {/*
      <div className="filter-buttons">
        {uniqueDays.map(day => (
          <button
            key={day}
            className={`filter-button ${selectedDay === day ? "active" : ""}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
        <button
          className="filter-button reset"
          onClick={() => setSelectedDay(null)}
        >
          Mostrar Todo
        </button>
      </div>
      */}

      {/* Lista de eventos */}
      <div className="schedule-list">
        {filteredEvents.map((event, index) => (
          <div key={index} className="schedule-card">
            <p className="schedule-time">{event.time}</p>
            <p className="schedule-day">{event.day}</p>
            <hr />
            <p className="schedule-location">
              <FaMapMarkerAlt className="location-icon" />
              {event.location}
            </p>
            {/* Tags */}
            <div className="tags-container">
              {event.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
