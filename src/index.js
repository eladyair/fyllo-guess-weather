import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

// Styles
import './index.css';

// Components
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
