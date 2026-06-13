import React, { useState, useEffect } from "react";
import Guests from "../components/Guests";
import LoadingSpinner from "../components/commons/LoadingSpinner";
import { GUESTS_SEARCH_FAIL } from "../utils/constants";

const Participants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        setError(GUESTS_SEARCH_FAIL);
        console.error(GUESTS_SEARCH_FAIL, error);
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
    </div>
  );
};

export default Participants;
