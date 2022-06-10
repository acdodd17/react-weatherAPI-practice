import React from 'react';

function Forecast() {
    return (
        <div className='forecast-container'>
            <div className='current-forecast card'>
                <p className='week-day'>Fri</p>
                <img src='http://openweathermap.org/img/wn/02d@2x.png' alt='current forecast icon'/>
                <h3 className='current-temp'>70°F</h3>
                <div className='high-low'>
                    <p className='low'>67°</p>
                    <p className='high'>84°</p>
                </div>
            </div>
            <div className='day1-forecast card'>
                <p className='week-day'>Day 1</p>
                <img src='http://openweathermap.org/img/wn/02d@2x.png' alt='current forecast icon'/>
                <h3 className='current-temp'>70°F</h3>
                <div className='high-low'>
                    <p className='low'>67°</p>
                    <p className='high'>84°</p>
                </div>
            </div>
            <div className='day2-forecast card'>
                <p className='week-day'>Day 2</p>
                <img src='http://openweathermap.org/img/wn/02d@2x.png' alt='current forecast icon'/>
                <h3 className='current-temp'>70°F</h3>
                <div className='high-low'>
                    <p className='low'>67°</p>
                    <p className='high'>84°</p>
                </div>
            </div>
            <div className='day3-forecast card'>
                <p className='week-day'>Day 3</p>
                <img src='http://openweathermap.org/img/wn/02d@2x.png' alt='current forecast icon'/>
                <h3 className='current-temp'>70°F</h3>
                <div className='high-low'>
                    <p className='low'>67°</p>
                    <p className='high'>84°</p>
                </div>
            </div>
            <div className='day4-forecast card'>
                <p className='week-day'>Day 4</p>
                <img src='http://openweathermap.org/img/wn/02d@2x.png' alt='current forecast icon'/>
                <h3 className='current-temp'>70°F</h3>
                <div className='high-low'>
                    <p className='low'>67°</p>
                    <p className='high'>84°</p>
                </div>
            </div>
        </div>
    );
}

export default Forecast;