import React from "react";
import "./Weather.css";
// import WeatherInfo from "./WeatherInfo";
// import WeatherForecas from "./WeatherForecas";

function Weather() {
  return (
    <div className="Weather">
      <form action="">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter acity.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Friday 3:00AM</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="	https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
          />
          11°C
        </div>
        <div className="col-6">
          <li>Precipitation: 1%</li>
          <li>Humidity: 57%</li>
          <li>Wind: 3 km/h</li>
        </div>
      </div>
      {/* <WeatherInfo />
      <WeatherForecas /> */}
    </div>
  );
}

export default Weather;
