import React, { useState, useEffect } from "react";
import Stands from "../components/Stands";
import LoadingSpinner from "../components/LoadingSpinner";
import { STANDS_SEARCH_FAIL } from "../utils/constants";

const StandsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        setError(STANDS_SEARCH_FAIL);
        console.error(STANDS_SEARCH_FAIL, error);
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
      <Stands />
    </div>
  );
};

export default StandsPage;
