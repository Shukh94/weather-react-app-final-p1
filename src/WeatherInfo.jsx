import React from "react";
import FormattedDate from "./formattedDate";
import AnimateIcon from "./AnimateIcon";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="info-left">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 weather-info">
          <AnimateIcon data={props.data.icon} />
          {/* <img src={props.data.icon} alt={props.data.description} /> */}
          <span className="temperature">
            {Math.round(props.data.temperature)}
            <span className="unit">°C</span>
          </span>{" "}
        </div>
        <div className="col-6">
          <ul className="info-right">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6 other-info">
          <ul className="other-info">
            <li>Feels Like: {props.data.feels}°C</li>
            <li>max: {props.data.maxTemp}°C</li>
            <li>Min: {props.data.minTemp}°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
