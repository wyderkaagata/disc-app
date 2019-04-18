import React, {useState, useEffect} from 'react';
import './Synthesator.css';

const synthesator = (props) => {
    const [utterance, setUtterance] = useState(props.sound);

    useEffect(() => {
        setUtterance(new SpeechSynthesisUtterance(props.sound));
    },[props.sound]);

    const playHandler = () => {
        new SpeechSynthesisUtterance(utterance)
        utterance.lang = 'pl-PL';
        utterance.rate = 0.5;
        speechSynthesis.speak(utterance);
    }

    return (
        <div className="synthesator">
            <button  disabled={props.disabled} onClick={playHandler}>Play</button>
           
        </div>
        
    );
};

export default synthesator;