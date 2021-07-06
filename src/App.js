import "./App.css";
import { useState } from "react";
import WeatherData from "./components/WeatherData";

const api = {
  key: process.env.REACT_APP_API_KEY,
  current_base:
    "https://api.weatherbit.io/v2.0/current?city=",
  forecast_base:
    "https://api.weatherbit.io/v2.0/forecast/daily?city=",
};

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const [query, setQuery] = useState("");

  const search = () => {
    fetch(`${api.current_base}${query}&country=Australia&key=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setCurrentWeather(result);
      });
    fetch(`${api.forecast_base}${query}&country=Australia&key=${api.key}`)
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
      <input type="text" name="search" id="search" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query}/>
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
