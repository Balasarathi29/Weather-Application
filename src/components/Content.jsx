import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import cloudSpeed from "../assets/cloud.png";
import cloudy from "../assets/cloudy.png";
import Humidity from "../assets/weather (1).png";
import "../index.css";
import Swal from "sweetalert2";
const Content = () => {
  const [weatherData, setWeatherData] = useState({
    icon: cloudy,
    temp: 0,
    city: "Chennai",
    country: "IN",
    lat: 0,
    log: 0,
    humidity: 0,
    speed: 0,
    searchCity: "",
  });
  let apiKey = "ff70d0f72cc08b2c5a360270c41eb6cb";
  const search = async (e) => {
    e.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.searchCity}&appid=${apiKey}&units=Metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      console.log(data);
      setWeatherData({
        icon: cloudy,
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        lat: data.coord.lat,
        lon: data.coord.lon,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        searchCity: "",
      });
    } catch (error) {
      Swal.fire(error.message , "Enter a valid city name");
    }

  };

  const handleChange = (e) => {
    setWeatherData({ ...weatherData, searchCity: e.target.value });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search(e);
    }
  };

  return (
    <div className="weather-card">
      <div className="card-body">
        <form className="search">
          <input
            type="text"
            placeholder="City"
            aria-label="City"
            onChange={handleChange}
            value={weatherData.searchCity}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" aria-label="Search" onClick={search}>
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
                <span className="value">{weatherData.lon}° E</span>
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
