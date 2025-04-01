import React from "react";
import "./Location.css";

const locationData = require("../data/location.json").location;

const Location = () => {
    return (
        <div className="location-container">
            <h2>Ubicación</h2>
            <p><strong>{locationData.name}</strong></p>
            <p>{locationData.address}</p>
            <div className="map-container">
                <iframe
                    src={locationData.googleMapsUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
