import React from 'react';

const Forecast = ({forecastData}) => {
    return (
        <div className='temp'>
            {forecastData.length > 0 ? (
                console.log(forecastData)
            ):(<></>)}
        </div>
    );
}

export default Forecast;
