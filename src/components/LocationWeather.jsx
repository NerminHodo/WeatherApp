import React, { useState } from "react";
import { getCities } from "../API";
import "../css/LocationWeather.css";

function LocationWeather({
  setShowLocationCard,
  setLocations,
  setCities,
  cities,
}) {
  const [location, setLocation] = useState("");

  function onRemoveClick(params) {
    setShowLocationCard((e) => {
      return !e;
    });
  }

  function handleChange(e) {
    setLocation(e.target.value);
  }

  function onSubmit(e) {
    let bool = false;
    cities.forEach((element) => {
      if (element.toLowerCase() === location.toLowerCase()) {
        bool = true;
        return;
      }
    });

    if (!bool) getCities(location, setCities);

    setShowLocationCard((e) => {
      return !e;
    });

    e.preventDefault();
  }

  return (
    <div className="card">
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          onChange={handleChange}
          value={location}
          autoFocus
        />
        <p className="removeBtn" onClick={onRemoveClick}>REMOVE</p>
      </form>
    </div>
  );
}

export default LocationWeather;
