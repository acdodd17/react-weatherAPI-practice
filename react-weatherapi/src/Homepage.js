import React from 'react';
import CitySearch from './components/CitySearch';

function Homepage() {
    return (
        <div className='homepage'>
            <header className='app-header text-center'>
                <h1>Weather Forecast</h1>
            </header>
            <section className='city-search text-center'>
                <h2>Enter a search location below:</h2> 
                <CitySearch />
            </section>
        </div>
    );
}

export default Homepage;