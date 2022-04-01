import React, {useState} from 'react';
import './App.css'
import Weather from './weather';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY 

  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  

    function getWeather(e){
      if (e.key =="Enter") {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
        .then(r => r.json())
        .then(data => {
          console.log(data[0])
          setLocation(data[0])
          setCity("")
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
        {location.lat ? (
          <div>
            <Weather location={location} />
          </div>
        ):(
          <></>
        )}
    </div>
  );
}

export default App;

