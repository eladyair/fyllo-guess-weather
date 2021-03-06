import { combineReducers } from 'redux';
// Importing redux persist to config persistence for the store
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

// App reducers
import cityReducer from './city/city.reducer';

// Setting up the configuration for the persistance of the parts of the state we want
export const persistConfig = {
    key: 'root',
    storage,
    whitelist: [] // Array that will hold all the reducers we want their state to be restored from the local storage
};

const rootReducer = combineReducers({
    city: cityReducer
});

export default persistReducer(persistConfig, rootReducer);
