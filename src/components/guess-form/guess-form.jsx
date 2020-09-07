import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchCityTempertureStart } from '../../redux/city/city.actions';

// Styles
import './guess-form.styles.scss';

const GuessForm = ({ city, fetchCityTemperture }) => {
    const [temperture, setTemperture] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setTemperture(value);
    };

    const handleKeyUp = e => {
        if (e.keyCode === 13) {
            onCheck(temperture);
        }
    };

    const handleClick = () => {
        onCheck(temperture);
    };

    const onCheck = temperture => {
        fetchCityTemperture({ city, temperture });
        setTemperture('');
    };

    return (
        <div className='temperture'>
            <input
                type='text'
                className='temperture__input'
                placeholder='Guess the temperture'
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                value={temperture}
            />
            <button className='temperture__btn' onClick={handleClick}>
                Check
            </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCityTemperture: tempertureDetails => dispatch(fetchCityTempertureStart(tempertureDetails))
});

export default connect(null, mapDispatchToProps)(GuessForm);
