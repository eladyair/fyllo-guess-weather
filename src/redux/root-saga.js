import { all, call } from 'redux-saga/effects';

// Sagas
import { citySagas } from './sagas/city.sagas';

export default function* rootSaga() {
    yield all([call(citySagas)]);
}
