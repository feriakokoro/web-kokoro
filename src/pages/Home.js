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

import kiwiImg from "../assets/images/KIWI_FONDO.webp";

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
          <h2>WEB BAJO CONSTRUCCIÓN</h2>
            <img
              src={kiwiImg}
              alt="kiwi"
              className="image"
              loading="lazy"
            />
          <p>
            Vamos a estar actualizando la web en los próximos días con toda la info
            de la próxima edición.
          </p>
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
