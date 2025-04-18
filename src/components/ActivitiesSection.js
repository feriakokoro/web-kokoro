import React from "react";
import "../assets/styles/home.css";
import nanaCat from "../assets/images/nana_cat.png";

const ActivitiesSection = () => {
  return (
    <section id="activities">
      <div className="section-flex-container">
        <div className="section-image">
          <img alt="render-kokoro" src={nanaCat}></img>
        </div>
        <div className="section-text">
          <h2 className="section-title">¿Qué podés hacer?</h2>
          <ul>
            <li className="activity-item">
              <span>Comprar productos handmade kawaii</span>
            </li>
            <li className="activity-item">
              <span>Participar de concursos de cosplay</span>
            </li>
            <li className="activity-item">
              <span>Talleres de dibujo y arte anime</span>
            </li>
            <li className="activity-item">
              <span>Sacarte fotos en espacios temáticos</span>
            </li>
            <li className="activity-item">
              <span>Karaoke con openings de tus animes favoritos</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection