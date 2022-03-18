import React from 'react';

const Currentweather = ({location, current, forecastData}) => {

    const minTemp = forecastData[0].temp.min
    const maxTemp = forecastData[0].temp.max
    return (
        <div>
            {current.weather ? 
            (<div className='weatherData temp'>
            <div className='city'>{location.name}, {location.state} {location.country}</div>
            {console.log(current.weather[0].icon)}
            Today
                <img className='img' 
                    src= {`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} 
                    alt= {current.weather[0].description}  title={current.weather[0].description} /> 
                <div className='temp-main' >{Math.round(current.temp)}°F </div>
                <p className= 'temp-minmax'>{Math.round(minTemp)}°  {Math.round(maxTemp)}°</p>
                </div>):(
                    <></>
                )
}
        </div>
    );
}

export default Currentweather;
