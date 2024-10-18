import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
// import WeatherInfo from "./WeatherInfo";
// import WeatherForecas from "./WeatherForecas";

function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
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
        <h1>New York</h1>
        <ul>
          <li>Friday 3:00AM</li>
          <li>Clear</li>
        </ul>
        <div className="row">
          <div className="col-6 weather-info">
            <img
              src="	https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
              className="float-left"
            />
            <span className="temperature">{temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 1%</li>
              <li>Humidity: 57%</li>
              <li>Wind: 3 km/h</li>
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
