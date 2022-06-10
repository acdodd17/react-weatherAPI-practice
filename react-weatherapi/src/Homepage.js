import React from 'react';
import CitySearch from './components/CitySearch';

function Homepage() {
    return (
        <div className='container'>
            <header>
                <h1>Open Source Weather Forecast</h1>
            </header>
            <section>
                <h2>Enter a search location below:</h2> 
                <CitySearch />
            </section>
        </div>
    );
}

export default Homepage;