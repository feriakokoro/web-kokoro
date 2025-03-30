import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMask, faPaintBrush, faMicrophone, faMusic } from "@fortawesome/free-solid-svg-icons";
import "./Contests.css";
import "./global.css";

const contestData = require("../data/contests.json").Concursos;

// Mapear los iconos
const iconMap = {
  "fa-mask": faMask,
  "fa-paint-brush": faPaintBrush,
  "fa-microphone": faMicrophone,
  "fa-music": faMusic,
};

const Contests = () => {
  const [selectedContest, setSelectedContest] = useState(null);

  const handleContestClick = (contest) => {
    setSelectedContest(contest);
  };

  const closeModal = () => {
    setSelectedContest(null);
  };

  return (
    <div className="page-container">
      <div className="contests-container">
        {/*<h1 className="title">✨ CONCURSOS ✨</h1>*/}
        <h1 className="title">CONCURSOS</h1>
        <div className="contests-grid">
          {contestData.map((contest) => (
            <div
              key={contest.id}
              className="contest-card"
              onClick={() => handleContestClick(contest)}
            >
              <div className="contest-title">
                <FontAwesomeIcon icon={iconMap[contest.icon]} className="contest-icon" />
                <h2 className="contest-title">{contest.title}</h2>
                <p className="contest-tags">
                  {contest.tags.map((tag, index) => (
                    <span key={index} className="contest-tag">{tag}</span>
                  ))}
                </p>
              </div>
              <div className="contest-content">
                <h3 className="contest-subtitle">Inscripción</h3>
                <p className="contest-description">{contest.cardInfo.inscription}</p>
                <h3 className="contest-subtitle">Premios</h3>
                <p className="contest-description">{contest.cardInfo.prizes}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedContest && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedContest.title}</h2>
              <h3>{selectedContest.inscription.title}</h3>
              <ul>
                {selectedContest.inscription.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <h3>{selectedContest.cmo_se_evalua.title}</h3>
              <ul>
                {selectedContest.cmo_se_evalua.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <h3>{selectedContest.rules.title}</h3>
              <ul>
                {selectedContest.rules.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <h3>{selectedContest.puntaje_y_desempates.title}</h3>
              <ul>
                {selectedContest.puntaje_y_desempates.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <h3>{selectedContest.additional.title}</h3>
              <ul>
                {selectedContest.additional.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;
