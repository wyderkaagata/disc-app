import React from 'react';
import Synthesator from './../Synthesator/Synthesator';
import disc from './../../disc.jpeg';
import './Header.css';

const header = props => {
    return (
    <div className="header">
        <div className="column2">
            <h1>SPEECH SYNTHESIS</h1>
            <h2>Phaistos Disc</h2>
            <Synthesator disabled={props.playDisabled} sound={props.sound}/>
            </div>
        <div className="column1">
            <img src={disc} alt="disc"></img>
        </div> 
    </div>
    );
};

export default header;