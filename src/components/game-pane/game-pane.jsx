import React from 'react';

// Styles
import './game-pane.styles.scss';

// Components
import CitiesList from '../cities-list/cities-list';

export default function GamePane() {
    return (
        <div>
            <CitiesList />
        </div>
    );
}
