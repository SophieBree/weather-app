import './App.css';
import { useState } from 'react';
const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.weatherbit.io/v2.0/current?city=Sydney&country=Australia&key="
}

function App() {
  const [weather, setWeather] = useState({});

const search = () => {
      fetch(`${api.base}${api.key}`, { mode: "cors" })
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(process.env.REACT_APP_API_KEY)
      })
  }

  return (
    <div className="App">
      <button onClick={search}>Get Weather Data</button>
      {(typeof weather.data != 'undefined') ? (
        <div className="weather-data">
          <p>{weather.data[0].temp}</p>
          </div>
        ) : ('')}
        
    </div>
  );
}

export default App;
