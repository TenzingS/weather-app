import React, {useState, useEffect} from 'react';
import './App.css'

const App = () => {
  const apiKey = 'API KEY'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (e) => {
    if (e.key =="Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setWeatherData(data)
        setCity("")
      })
    }
  }

  return (
    <div className='container'>
      <input 
        className='input' 
        placeholder='Enter City...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather} />

        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p>Welcome to Weather App! Enter in a location to get a weather of!</p>
          </div>
        ):(
          <div className='weather-data'>
            <p className='city'>{weatherData.name}</p>
            <p className='temp'>{Math.round(weatherData.main.temp)}℉</p>
            <p className='weather'>{weatherData.weather[0].main}</p>
          </div>
        )}

        {weatherData.cod === "404" ? (
          <p>Location not found. Please enter a valid location name.</p>
        ):(
          <></>
        )}
    </div>
  );
}

export default App;

