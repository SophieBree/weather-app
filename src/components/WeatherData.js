import React from "react";

export default function WeatherDataTemp(props) {
  return (
    <div className="weather-data-container">
      <span className="current-temp">{props.currentWeather.data[0].temp}º</span>

      <div className="feels-like">
        <p>Feels like</p>
        <span>{props.currentWeather.data[0].app_temp}º</span>
      </div>

      <div className="max-temp">
        <p>Max Today</p>
        <span>{props.forecastWeather.data[0].max_temp}º</span>
      </div>

      <div className="min-temp">
        <p>Overnight min</p>
        <span>{props.forecastWeather.data[0].min_temp}º</span>
      </div>

      <span className="weather-description">
        {props.currentWeather.data[0].weather.description}.
      </span>

      <span className="rain-chance">
        {props.forecastWeather.data[0].pop}% chance of rain
      </span>

      <div className="wind">
        <p>Wind</p>
        <span>
          {props.currentWeather.data[0].wind_cdir}{" "}
          {Math.round(props.currentWeather.data[0].wind_spd * 3.6 * 10) / 10}{" "}
          km/h
        </span>
      </div>

      <div className="sunrise">
        <p>Sunrise</p>
        <span>{props.forecastWeather.data[0].sunrise_ts}</span>
      </div>

      <div className="sunset">
        <p>Sunset</p>
        <span>{props.forecastWeather.data[0].sunset_ts}</span>
      </div>

      <span className="uv">
        UV {Math.ceil(props.currentWeather.data[0].uv)}
      </span>

      <span className="forecast-label">Forecast for the next few days</span>

      <div className="tomorrow-weather">
        <p>Tomorrow</p>
        <span className="max">{props.forecastWeather.data[0].max_temp}º</span>
        <span className="min">{props.forecastWeather.data[0].min_temp}º</span>
      </div>

      <div className="overmorrow-weather">
        <p>
          {new Date().getDate() + 2}/{new Date().getMonth() + 1}
        </p>
        <span className="max">{props.forecastWeather.data[1].max_temp}º</span>
        <span className="min">{props.forecastWeather.data[1].min_temp}º</span>
      </div>

      <div className="weather-3">
        <p>
          {new Date().getDate() + 3}/{new Date().getMonth() + 1}
        </p>
        <span className="max">{props.forecastWeather.data[2].max_temp}º</span>
        <span className="min">{props.forecastWeather.data[2].min_temp}º</span>
      </div>

      <div className="weather-4">
        <p>
          {new Date().getDate() + 4}/{new Date().getMonth() + 1}
        </p>
        <span className="max">{props.forecastWeather.data[3].max_temp}º</span>
        <span className="min">{props.forecastWeather.data[3].min_temp}º</span>
      </div>
    </div>
  );
}
