import React from "react";
import "../css/WeatherDisplay.css";

function WeatherDisplay({ location, i, removeLocation }) {
  let deg = location.data.wind.deg;

  function onRemoveClick() {
    removeLocation(location.data.name);
  }

  return (
    <div className="card">
      <div className="city-flag">
        <h3>{location.data.name}</h3>
        <img
          src={`http://openweathermap.org/images/flags/${location.data.sys.country.toLowerCase()}.png`}
          alt="not found"
        />
      </div>
      <div className="weather-stats">
        <p>{location.data.main.temp}</p>
        <img
          src={`http://openweathermap.org/img/wn/${location.data.weather[0].icon}@2x.png`}
          alt=""
        />
        <div className="wind">
          <p>{location.data.wind.speed}km/h</p>
          <p className="windArrow" style={{ transform: `rotate(${deg}deg)` }}>
            →
          </p>
        </div>
      </div>
      <div>
        <button style={{ margin: 0 }} onClick={onRemoveClick}>
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default WeatherDisplay;
