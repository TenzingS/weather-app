import React, {useState, useEffect} from 'react';
import Currentweather from './currentWeather';
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

    },[location.lat])

    
   const [loading,setLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     },1000);
   },[]);

    return (
        <div>
            {loading ? 
            <h2>"loading..."</h2>
            :
            current.weather ? (
                <>
                <Currentweather location={location} current={current} forecastData={forecastData} />
                <Forecast forecastData={forecastData} />
                </>
            ):(
                null
            )}    
        </div>
      );
    }


export default Weather;
