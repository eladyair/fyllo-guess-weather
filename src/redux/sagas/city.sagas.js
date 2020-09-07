import axios from 'axios';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { FETCH_TEMPERTURE_START } from '../types';
import { fetchCityTempertureSuccess, fetchCityTempertureFailure } from '../city/city.actions';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const APP_ID = '&units=metric&APPID=9cff733aee57cb05b63dd4f731c46bc4';

export function* onFetchCityTempertureStart() {
    yield takeLatest(FETCH_TEMPERTURE_START, onFetchCityTempertureStartAsync);
}

export function* onFetchCityTempertureStartAsync({ payload }) {
    try {
        const { city, temperture } = payload;
        const res = yield axios.get(API_URL + city + APP_ID);
        const result = { city, temperture, actualTemp: res.data.main.temp };
        yield put(fetchCityTempertureSuccess(result));
    } catch (error) {
        yield put(fetchCityTempertureFailure(error));
    }
}

export function* citySagas() {
    yield all([call(onFetchCityTempertureStart)]);
}
