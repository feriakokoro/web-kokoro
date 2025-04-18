import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../assets/styles/home.css";

import homeService from "../services/home";
import NewsSection from "../components/NewsSection";
import ActivitiesSection from "../components/ActivitiesSection";
import HeroSection from "../components/HeroSection";
import PastEventsSection from "../components/PastEventsSection";
import LocationSection from "../components/LocationSection";

const Home = () => {
  const HOME_SEARCH_FAIL = "Error al cargar datos de la home";
  const [homeJson, setHomeJson] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setHomeJson(await homeService.getData());
      } catch (error) {
        console.error(HOME_SEARCH_FAIL, error);
      }
    };

    fetchData();
  }, []);

  const pastEventsJson = homeJson?.pastEvents ?? [];
  const newsJson = homeJson?.news ?? [];
  const locationJson = homeJson?.location ?? {};

  return (
    <div className="container">
      <HeroSection />
      <ActivitiesSection />
      <NewsSection newsJson={newsJson} />
      <PastEventsSection pastEventsJson={pastEventsJson} />
      <LocationSection locationJson={locationJson} />
    </div>
  );
};

export default Home;
