import React, { useEffect, useState } from "react";
import LocationWeather from "./LocationWeather";
import WeatherDisplay from "./WeatherDisplay";
import "../css/WeatherCard.css";
import useLocalStorage from "../hooks/useLocalStorage";
import { getWeatherData } from "../API";

function WeatherCard() {
  const [locations, setLocations] = useState([]);
  const [showLocationCard, setShowLocationCard] = useState(false);
  const [cities, setCities] = useLocalStorage("city", []);

  function removeLocation(name) {
    setLocations((current) =>
      current.filter((location) => {
        return location.data.name !== name;
      })
    );

    setCities((current) =>
      current.filter((location) => {
        return location !== name;
      })
    );
  }

  function onClick() {
    setShowLocationCard((e) => {
      return !e;
    });
  }

  let bool = false;

  useEffect(() => {
    setLocations([]);
    cities.forEach((e) => {
      if (!bool) getWeatherData(e, setLocations);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    bool = true;
  }, [cities]);

  // locations.forEach((loc) => {
  //   if (e === loc.data.name) bool = true;
  //   return;
  // });

  return (
    <div className="weather">
      {showLocationCard && (
        <LocationWeather
          setShowLocationCard={setShowLocationCard}
          setLocations={setLocations}
          setCities={setCities}
          cities={cities}
        />
      )}

      {locations.map((location, i) => (
        <WeatherDisplay
          key={i}
          location={location}
          i={i}
          removeLocation={removeLocation}
        />
      ))}

      <button className="addButton" onClick={onClick}>
        Add
      </button>
    </div>
  );
}

export default WeatherCard;
