import React from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecas from "./WeatherForecas";

function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Enter city..."
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary  w-100"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
      <WeatherInfo />
      <WeatherForecas />
    </div>
  );
}

export default Weather;
