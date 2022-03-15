import React, {useState, useEffect} from 'react';

const Weather = ({name, country, forecastData}) => {


    return (
        <div className='temp'>
            <p className='city'>{name}, {country}</p>
            {forecastData.lentgh > 0 ? (
                <div>
                <img className='img' 
                    src= {`https://openweathermap.org/img/wn/${forecastData[0].weather[0].icon}@2x.png`} 
                    alt= {forecastData[0].weather[0].description} /> 
            {Math.round(forecastData[0].main.temp)}℉  
            <p className= 'temp-minmax'>{Math.round(forecastData[0].temp.min)}℉  {Math.round(forecastData[0].temp.max)}℉</p>
            </div>):(
            <></>
            )}
        </div>     

      );
    }


export default Weather;
