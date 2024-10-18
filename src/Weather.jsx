import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
// import WeatherInfo from "./WeatherInfo";
// import WeatherForecas from "./WeatherForecas";

function Weather() {
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
      date: "Friday  8:50PM",
      feels: response.data.main.feels_like,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form action="">
          <div className="row mt-3">
            <div className="col-9 ">
              <input
                type="search"
                placeholder="Enter acity.."
                className="form-control search-input"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="info-left">
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 weather-info">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
              <span className="unit">°C</span>
            </span>{" "}
          </div>
          <div className="col-6">
            <ul className="info-right">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6 other-info">
            <ul className="other-info">
              <li>Feels Like: {weatherData.feels}°C</li>
              <li>max: {weatherData.maxTemp}°C</li>
              <li>Min: {weatherData.minTemp}°C</li>
            </ul>
          </div>
        </div>
        {/* <WeatherInfo />
      <WeatherForecas /> */}
      </div>
    );
  } else {
    const apiKey = "7746bdeabca928cfedcad71e52fd9d66";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

export default Weather;
