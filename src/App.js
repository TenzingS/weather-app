import React, {useState} from 'react';
import './App.css'
import Weather from './weather';
import Forecast from './forecast';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY 

  const [city, setCity] = useState("")
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [forecastData, setForecastData] = useState([])
  

    function getWeather(e){
      if (e.key =="Enter") {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
        .then(r => r.json())
        .then(data => {
          console.log(data)
          setName(data.city.name)
          setCountry(data.city.country)
          setForecastData(data.list)
        })
   }}


  return (
    <div className='container'>
      <p>Welcome to Weather App! Enter in a location to get a weather of.</p>
      <input 
        className='input' 
        placeholder='Enter City...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather} />

        {name ? (
          <div className='weather-data'>
            <Weather name={name} country={country} forecastData={forecastData} />
            <Forecast forecastData={forecastData} />
          </div>
        ):(
          <></>
        )}

        {/* {weatherData.cod === "404" ? (
          <p>Location not found. Please enter a valid location name.</p>
        ):(
          <></>
        )} */}
    </div>
  );
}

export default App;

