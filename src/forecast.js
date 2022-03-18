import React from 'react';

const Forecast = ({forecastData}) => {
    return (
        <div className='wrapper'>
            {forecastData.slice(1,6).map((each) => {
                const date = new Date(each.dt * 1000)
                const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                let day = days[date.getDay()];
                return (
                    <div key={each.dt} className='weatherData temp'>
                        <p className='day'>{day}</p>
                        <img className='img' 
                        src= {`https://openweathermap.org/img/wn/${each.weather[0].icon}@2x.png`} 
                        alt= {each.weather[0].description} title={each.weather[0].description} /> 
                    <p className= 'temp-minmax'>{Math.round(each.temp.min)}°  {Math.round(each.temp.max)}°</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Forecast;
