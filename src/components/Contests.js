import React, { useState } from "react";
import "./Contests.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMask, faPaintBrush, faMicrophone, faMusic } from "@fortawesome/free-solid-svg-icons";

// Importar el archivo JSON con los datos de los concursos
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
    <div className="contests-container">
      <h1 className="title">✨ Concursos ✨</h1>
      <div className="contests-grid">
        {contestData.map((contest) => (
          <div
            key={contest.id}
            className="contest-card"
            onClick={() => handleContestClick(contest)}
          >
            <FontAwesomeIcon icon={iconMap[contest.icon]} className="contest-icon" />
            <h2 className="contest-title">{contest.title}</h2>
            <p className="contest-tags">
              {contest.tags.map((tag, index) => (
                <span key={index} className="contest-tag">{tag}</span>
              ))}
            </p>
            <p className="contest-prizes">{contest.cardInfo.prizes}</p>
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
  );
};

export default Contests;
