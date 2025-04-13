import React from "react";
import Stands from "./Stands";
import Guests from "./Guests";

const Participants = () => {
  return (
    <div className="page-container">
      <Guests />
      <Stands />
    </div>
  );
};

export default Participants;
