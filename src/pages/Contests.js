import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMask, faPaintBrush, faMicrophone, faMusic } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/contests.css";
import "../assets/styles/global.css";
import "../assets/styles/section.css";

const contestData = require("../data/contests.json").Concursos;

const iconMap = {
  "fa-mask": faMask,
  "fa-paint-brush": faPaintBrush,
  "fa-microphone": faMicrophone,
  "fa-music": faMusic,
};

function buildContest(contestData) {
  if (contestData.details.length === 0) {
    return;
  }
  return (
    < div className="contest-section" >
      <h3>{contestData.title}</h3>
      <ul>
        {contestData.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div >
  );
}

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
      <div className="section-container">
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

        {selectedContest && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

              <div className="modal-header">
                <h2>{selectedContest.title}</h2>
              </div>

              {buildContest(selectedContest.inscription)}
              {buildContest(selectedContest.como_se_evalua)}
              {buildContest(selectedContest.rules)}
              {buildContest(selectedContest.puntaje_y_desempates)}
              {buildContest(selectedContest.additional)}

              {/*
              <div className="contest-section">
                <h3>{selectedContest.inscription.title}</h3>
                <ul>
                  {selectedContest.inscription.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="contest-section">
                <h3>{selectedContest.como_se_evalua.title}</h3>
                <ul>
                  {selectedContest.como_se_evalua.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>


              <div className="contest-section">
                <h3>{selectedContest.rules.title}</h3>
                <ul>
                  {selectedContest.rules.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="contest-section">
                <h3>{selectedContest.puntaje_y_desempates.title}</h3>
                <ul>
                  {selectedContest.puntaje_y_desempates.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="contest-section">
                <h3>{selectedContest.additional.title}</h3>
                <ul>
                  {selectedContest.additional.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              */}

              <button className="filter-button" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Contests;
