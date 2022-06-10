import React from 'react';

function Forecast() {
    return (
        <div className='forecast-container'>
            <div className='current-forecast card'>
                <p className='week-day'>Fri</p>
                <img src='http://openweathermap.org/img/wn/02d@2x.png' alt='current forecast icon'/>
                <h3 className='current-temp'>70°F</h3>
                <p className='high-low'>67/84</p>
            </div>
        </div>
    );
}

export default Forecast;