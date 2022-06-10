import React from 'react';
import Forecast from '../Forecast';

function CitySearch() {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <>
            <div className='search-form'>
                <form>
                    <input type="text" id="search-input" placeholder="Enter city name"></input>
                    <button type='submit' id="search-btn" onClick={handleSubmit}>Search</button>
                </form>
            </div>
            <div className='forecast'>
                <Forecast />
            </div>
        </>
    );
}

export default CitySearch;