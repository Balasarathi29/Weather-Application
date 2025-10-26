import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import cloudSpeed from "../assets/cloud.png";
import cloudy from "../assets/cloudy.png";
import Humidity from "../assets/weather (1).png";
import "../index.css";
const Content = () => {
  const [weatherData, setWeatherData] = useState({
    icon: cloudy,
    temp: 28,
    city: "Chennai",
    country: "IN",
    lat: 13.08,
    log: 80.27,
    humidity: 78,
    speed: 10,
  });

  return (
    <div className="weather-card">
      <div className="card-body">
        <form className="search">
          <input type="text" placeholder="City" aria-label="City" />
          <button type="submit" aria-label="Search">
            <BsSearch />
          </button>
        </form>

        <div className="card-main">
          <div className="left">
            <div className="image">
              <img src={weatherData.icon} alt="Weather Icon" />
            </div>

            <div className="temp">{weatherData.temp}°C</div>
            <div className="place">
              {weatherData.city}{" "}
              <span className="country">• {weatherData.country}</span>
            </div>
          </div>

          <div className="right">
            <div className="coords">
              <div className="coord">
                <span className="label">Latitude</span>
                <span className="value">{weatherData.lat}° N</span>
              </div>
              <div className="coord">
                <span className="label">Longitude</span>
                <span className="value">{weatherData.log}° E</span>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <img src={Humidity} alt="Humidity Icon" />
                <div>
                  <div className="percent">{weatherData.humidity}%</div>
                  <div className="text">Humidity</div>
                </div>
              </div>

              <div className="stat">
                <img src={cloudSpeed} alt="Cloud Speed Icon" />
                <div>
                  <div className="percent">{weatherData.speed} km/h</div>
                  <div className="text">Wind</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer">
          <h1>Designed by Bala Sarathi</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
