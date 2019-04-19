import React, {useState, useEffect, useReducer} from 'react'
import SymbolList from '../../components/SymbolList/SymbolList';
import Synthesator from '../../components/Synthesator/Synthesator';
import SelectedSymbols from '../../components/SelectedSymbols/SelectedSymbols'
import WordsList from '../../components/WordsList/WordsList';
import './SpeechSynthesis.css';
import disc from './../../disc.jpeg';
import reducer from './../../reducer';


const symbolSynthesis = props => {
    
    //const [symbols, setSymbols] = useState([]);
    //const [speech, setSpeech] = useState("");
    //const [selectedId, setSelectedId] = useState(null);
    const [wordMode, setWordMode] = useState(true);
    
    const initialState = {symbols: [], speech: "", selectedId: null};
    const [state, dispatch] = useReducer(reducer, initialState);

    /*const addHandler = (symbol) => {
        const uuidValue = uuid.v4();
        const updatedSymbol = {...symbol, uuid: uuidValue};
        const updatedSymbols = [...symbols, updatedSymbol]
        const updatedSounds = updatedSymbols.map(symbol => symbol.sound);
        const updatedSpeech = updatedSounds.join('');
        setSymbols(updatedSymbols);
        setSpeech(updatedSpeech);
        
    }

    const removeHandler = (symbol) => {
        const index = symbols.findIndex(s => s.uuid === symbol.uuid);
        const updatedSymbols = [...symbols.slice(0, index), ...symbols.slice(index+1)];
        const updatedSounds = updatedSymbols.map(symbol => symbol.sound);
        const updatedSpeech = updatedSounds.join('');
        setSymbols(updatedSymbols);
        setSpeech(updatedSpeech);
        
    }

    const speechHandler = (speechRequest, id) => {
        setSpeech(speechRequest);
        setSelectedId(id);
    }*/

    const toggleMode = () => {
        setWordMode(!wordMode);
        dispatch({type: 'toggleMode'});
    }

    let mode = wordMode ? <WordsList selected={state.selectedId} clicked={(speech, id) => dispatch({type: 'selectWord', payload: {speechRequest: speech, id: id}})}/>
        : (<React.Fragment>
            {state.symbols.length>0 ?<h2>Selected signs</h2> : null}
            <SelectedSymbols symbols={state.symbols} clicked={(selectedSymbol) => dispatch({type: 'removeSymbol', symbol: selectedSymbol})}/>
            <h2>Phaistos Disc signs</h2>
            <SymbolList clicked={(selectedSymbol) => dispatch({type: 'addSymbol', symbol: selectedSymbol})}/>
        </React.Fragment> );

    return (
        <div className="container">
            <div className="header">
                <div className="column2">
                    <h1>SPEECH SYNTHESIS</h1>
                    <h2>Phaistos Disc</h2>
                    <Synthesator disabled={state.speech.length===0} sound={state.speech}/>
                </div>
                <div className="column1">
                    <img src={disc} alt="disc"></img>
                </div> 
            </div>
            <button classname="toggleButton" onClick={toggleMode}>{wordMode ? "Word Creator" : "Phaistos Disc"}</button>
            {mode}  
        </div>
        );
};


export default symbolSynthesis;