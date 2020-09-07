import { FETCH_TEMPERTURE_START, FETCH_TEMPERTURE_SUCCESS, FETCH_TEMPERTURE_FAILURE } from '../types';

export const fetchCityTempertureStart = tempertureDetails => ({
    type: FETCH_TEMPERTURE_START,
    payload: tempertureDetails
});

export const fetchCityTempertureSuccess = temperture => ({
    type: FETCH_TEMPERTURE_SUCCESS,
    payload: temperture
});

export const fetchCityTempertureFailure = error => ({
    type: FETCH_TEMPERTURE_FAILURE,
    payload: error
});
