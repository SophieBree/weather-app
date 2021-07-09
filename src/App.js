import "./App.css";
import React, { useState } from "react";
import WeatherData from "./components/WeatherData";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const [city, setCity] = useState("");

  const search = () => {
    fetch(
      `/.netlify/functions/fetch-weather/fetch-current-weather?city=${city}`,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrentWeather(result);
      });
    fetch(
      `/.netlify/functions/fetch-weather/fetch-forecast-weather?city=${city}`,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((result) => {
        let sunrise_time = new Date(
          result.data[0].sunrise_ts * 1000
        ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        let sunset_time = new Date(
          result.data[0].sunset_ts * 1000
        ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        result.data[0].sunrise_ts = sunrise_time;
        result.data[0].sunset_ts = sunset_time;
        setForecastWeather(result);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button onClick={search}>Get Weather Data</button>
      {typeof currentWeather.data != "undefined" &&
      typeof forecastWeather.data != "undefined" ? (
        <div>
          <h1>Weather Data for {currentWeather.data[0].city_name}</h1>
          <WeatherData
            currentWeather={currentWeather}
            forecastWeather={forecastWeather}
          />

        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
