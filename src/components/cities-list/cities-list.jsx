import React, { useState } from 'react';

// Styles
import './cities-list.styles.scss';

// Components
import City from '../city/city';
import GuessForm from '../guess-form/guess-form';

export default function CitiesList() {
    const [cities, setCities] = useState(['copenhagen', 'rome', 'liverpool', 'tel aviv', 'budapest']);
    const [selectedCity, setSelectedCity] = useState('');

    const handleSelect = city => {
        console.log('Selected: ', city);
        setSelectedCity(city);
    };

    return (
        <div className='cities-container'>
            <h2 className='cities-title'>Select a City</h2>
            <ul className='cities'>
                {cities.map((city, index) => (
                    <City key={index} city={city} handleSelect={handleSelect} />
                ))}
            </ul>
            <div className='selected-city'>{selectedCity}</div>
            <GuessForm city={selectedCity} />
        </div>
    );
}
