import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/home.css";

import { HOME_SEARCH_FAIL } from "../utils/constants";

import homeService from "../services/home";
import NewsSection from "../components/NewsSection";
import ActivitiesSection from "../components/ActivitiesSection";
import HeroSection from "../components/HeroSection";
import PastEventsSection from "../components/PastEventsSection";
import LocationSection from "../components/LocationSection";
import LoadingSpinner from "../components/LoadingSpinner";
import MapSection from "../components/MapSection";
import Modal from "../components/Modal";

const Home = () => {
  const mapIsEnabled = false;
  const alertModalIsEnabled = true;

  const [homeJson, setHomeJson] = useState({
    earlyTicket: {},
    pastEvents: [],
    news: [],
    location: {},
    map: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsAlertModalOpen(false);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await homeService.getData();

        if (isMounted && data) {
          setHomeJson({
            earlyTicket: data.earlyTicket,
            pastEvents: data.pastEvents || [],
            news: data.news || [],
            location: data.location || {},
            map: data.map || {},
          });
        }
      } catch (error) {
        if (isMounted) {
          setError(HOME_SEARCH_FAIL);
          console.error(HOME_SEARCH_FAIL, error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="container">
      {alertModalIsEnabled && (
        <Modal isOpen={isAlertModalOpen} onClose={handleModalClose}>
          <h2>LA FERIA KOKORO SE REPROGRAMA PARA EL SABADO 9 DE AGOSTO️</h2>
          <p>
            Reprogramamos la 5ta edición para el Sábado 9/8 de 12 a 18 hs en
            Bartolomé Mitre 2455.
          </p>
          <p>Las entradas ya adquiridas siguen siendo válidas.</p>
          <p>Pronto más info sobre convocatorias, actividades y propuestas.</p>
          <p>Este invierno, el arte entra en calor.</p>
          <p>Edición Maravillas Invernales – Ahora, el 9 de Agosto!</p>
        </Modal>
      )}
      <HeroSection earlyTicket={homeJson.earlyTicket} />
      <ActivitiesSection />
      {homeJson.news.length > 0 && <NewsSection newsJson={homeJson.news} />}
      {mapIsEnabled && <MapSection mapJson={homeJson.map} />}
      {homeJson.pastEvents.length > 0 && (
        <PastEventsSection pastEventsJson={homeJson.pastEvents} />
      )}
      {Object.keys(homeJson.location).length > 0 && (
        <LocationSection locationJson={homeJson.location} />
      )}
    </div>
  );
};

export default Home;
