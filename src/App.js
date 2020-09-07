import React from 'react';

// Styles
import './App.css';

// Components
import GamePane from './components/game-pane/game-pane';
import ResultsPane from './components/results-pane/results-pane';

function App() {
    return (
        <div className='app-conatiner'>
            <GamePane />
            <hr />
            <ResultsPane />
        </div>
    );
}

export default App;
