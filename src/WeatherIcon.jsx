import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={100}
        animate={true}
      />
    </div>
  );
}

export default WeatherIcon;
