import React, {useState, useEffect} from 'react';
import Forecast from './forecast';

const Weather = ({location}) => {
    const apiKey = process.env.REACT_APP_API_KEY 

    const [current, setCurrent] = useState([])
    const [forecastData, setForecastData] = useState([])

    useEffect(() => {
        const lat = location.lat
        const lon = location.lon
        async function fetchData(){
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`);
            const json = await res.json()
            console.log(json)
            setCurrent(json.current)
            setForecastData(json.daily)
        }
        fetchData();
        // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`)
        // .then(r => r.json())
        // .then(data => {
        //     console.log(data)
        //     setCurrent(data.current)
        //     setForecastData(data.daily)
        // })
    },[location.lat])

    return (
        <div>
            {current.length > 0 ? (
                <>
                {/* <img className='img' 
                    src= {`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} 
                    alt= {current.weather[0].description} /> 
                <div className='temp-main' >{Math.round(current.temp)}°F </div>
                <p className= 'temp-minmax'>{Math.round(forecastData[0].temp.min)}°  {Math.round(forecastData[0].temp.max)}°</p> */}
            </>):(
                <>
            <div className='weatherData1 temp'>
            <div className='city'>{location.name}, {location.state} {location.country}</div>
                <img className='img' 
                    src= {`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} 
                    alt= {current.weather[0].description} /> 
                <div className='temp-main' >{Math.round(current.temp)}°F </div>
                <p className= 'temp-minmax'>{Math.round(forecastData[0].temp.min)}°  {Math.round(forecastData[0].temp.max)}°</p>
                </div>
                <Forecast forecastData={forecastData} />
                </>           
            )}    
        </div>
      );
    }


export default Weather;
