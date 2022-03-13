import React, {useState, useEffect} from 'react';
import './App.css'
import Weather from './weather';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY 
  const [cityData, setCityData] = useState([{}])
  const [city, setCity] = useState("")
  const [name, setName] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  

    async function getWeather(e){
      if (e.key =="Enter") {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&APPID=${apiKey}`)
        .then(res => res.json())
        .then(data => {
        console.log(data[0])
        setCityData(data[0])
        setName(data[0].name)
        setState(data[0].state)
        setCountry(data[0].country)
        setLat(data[0].lat)
        setLon(data[0].lon)
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

        {typeof cityData.country === 'undefined' ? (
          <div>
            <p>Welcome to Weather App! Enter in a location to get a weather of.</p>
          </div>
        ):(
          <div className='weather-data'>
            <Weather name={name} state={state} country={country} lat={lat} lon ={lon} />
          </div>
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

