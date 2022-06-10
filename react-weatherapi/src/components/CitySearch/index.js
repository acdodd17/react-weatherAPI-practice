import React from 'react';
import Forecast from '../Forecast';

function CitySearch() {
    return (
        <>
            <div className='search-form'>
                <form>
                    <input type="text" id="search-input" placeholder="Enter city name"></input>
                </form>
            </div>
            <div className='forecast'>
                <Forecast />
            </div>
        </>
    );
}

export default CitySearch;