import { FETCH_TEMPERTURE_SUCCESS, FETCH_TEMPERTURE_FAILURE } from '../types';

const initialState = {
    cities: [],
    guesses: [],
    matches: [],
    error: null
};

const cityReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_TEMPERTURE_SUCCESS:
            const { city, temperture, actualTemp } = payload;
            if (Math.abs(temperture - actualTemp) < 5) {
                const match = { city, isMatch: true, temperture, actualTemp };
            }
            return {
                ...state,
                cities: [...state.cities, city]
            };
        case FETCH_TEMPERTURE_FAILURE:
            return {
                ...state,
                results: []
            };
        default:
            return state;
    }
};

export default cityReducer;
