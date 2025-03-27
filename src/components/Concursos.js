import React from "react";
import "./Concursos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMask, faPaintBrush, faMicrophone, faMusic } from "@fortawesome/free-solid-svg-icons";

const contestData = require("../data/concursos.json").Concursos;

const iconMap = {
  "fa-mask": faMask,
  "fa-paint-brush": faPaintBrush,
  "fa-microphone": faMicrophone,
  "fa-music": faMusic,
};

const Contests = () => {
  return (
    <div className="contests-container">
      <h1 className="title">✨ Concursos ✨</h1>
      <div className="contests-grid">
        {contestData.map((contest) => (
          <div key={contest.id} className="contest-card">
            <FontAwesomeIcon icon={iconMap[contest.icon]} className="contest-icon" />
            <h2 className="contest-title">{contest.title}</h2>
            <p className="contest-tags">{contest.tags.join(" • ")}</p>
            <p className="contest-inscription">{contest.cardInfo.inscription}</p>
            <p className="contest-prizes">{contest.cardInfo.prizes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contests;