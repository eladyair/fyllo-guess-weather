import React from 'react';

// Styles
import './city.styles.scss';

export default function City({ city, handleSelect }) {
    const handleClick = () => {
        handleSelect(city);
    };

    return (
        <li className='city' onClick={handleClick}>
            {city}
        </li>
    );
}
