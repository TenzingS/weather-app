import React, {useState, useEffect} from 'react';

const Weather = ({name, state, country, lat, lon}) => {
    const apiKey = process.env.REACT_APP_API_KEY 
    const [currentData, setCurrentData] = useState([{}])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=imperial&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    },[])


    return (
        <div>
            {name? (
                <div className='temp'>
                <p className='city'>{name}, {state} {country}</p>
                  {/* <img className='img' src= {`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt= {weatherData.weather[0].description}/>
                  {Math.round(weatherData.main.temp)}℉ 
                  <p className= 'temp-minmax'>{Math.round(weatherData.main.temp_min)}℉  {Math.round(weatherData.main.temp_max)}℉</p>           */}
                </div>
            ):(<p>Location not found. Please enter a valid location name.</p>)}
            {/* <p className='weather'>{weatherData.weather[0].main}</p> */}
        </div>
    );
}

export default Weather;
