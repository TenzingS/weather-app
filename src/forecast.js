import React from 'react';

const Forecast = ({forecastData}) => {
    return (
        <div className='wrapper'>
            {forecastData.slice(1,6).map((each) => {
                return (
                    <div className='weatherData temp'>
                        <img className='img' 
                        src= {`https://openweathermap.org/img/wn/${each.weather[0].icon}@2x.png`} 
                        alt= {each.weather[0].description} /> 
                    <p className= 'temp-minmax'>{Math.round(each.temp.min)}°  {Math.round(each.temp.max)}°</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Forecast;
