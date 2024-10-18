import React from "react";

function WeatherInfo() {
  return (
    <div className="weather-info">
      <h1>San Fransisco</h1>
      <ul>
        <li>
          <Date></Date>
        </li>
        <li className="text-capitalize">Description</li>
      </ul>
    </div>
  );
}

export default WeatherInfo;
