import React, { useState, useEffect } from "react";
import Stands from "./Stands";
import Guests from "./Guests";
import LoadingSpinner from "../components/LoadingSpinner";

const Participants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const PARTICIPANTS_SEARCH_FAIL = "Error al cargar los participantes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        setError(PARTICIPANTS_SEARCH_FAIL);
        console.error(PARTICIPANTS_SEARCH_FAIL, error);
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
      <Guests />
      <Stands />
    </div>
  );
};

export default Participants;
