import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './Nav.css';

const nav = ( props ) => (
    <div>
    <header className="Nav">
        <nav>
            <ul className="NavigationItems">
                <NavigationItem link="/" exact>Speech Synthesis</NavigationItem>
                <NavigationItem link="/voc">Vocabulary</NavigationItem>
            </ul>
        </nav>
    </header>
    </div>
    
);

export default nav;