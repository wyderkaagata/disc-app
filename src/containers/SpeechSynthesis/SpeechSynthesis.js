import React, {useState, useEffect, useReducer} from 'react'
import SymbolList from '../../components/SymbolList/SymbolList';
import Synthesator from '../../components/Synthesator/Synthesator';
import SelectedSymbols from '../../components/SelectedSymbols/SelectedSymbols'
import WordsList from '../../components/WordsList/WordsList';
import Header from './../../components/Header/Header';
import './SpeechSynthesis.css';
import reducer from './../../reducer';


const symbolSynthesis = props => {
    
    const [wordMode, setWordMode] = useState(true);
    const initialState = {symbols: [], speech: "", selectedId: null};
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleMode = () => {
        setWordMode(!wordMode);
        dispatch({type: 'toggleMode'});
    }

    let mode = wordMode ? <WordsList selected={state.selectedId} clicked={(speech, id) => dispatch({type: 'selectWord', payload: {speechRequest: speech, id: id}})}/>
        : (<React.Fragment>
            {state.symbols.length>0 ?<h2>Selected signs</h2> : null}
            <SelectedSymbols symbols={state.symbols} clicked={(selectedSymbol) => dispatch({type: 'removeSymbol', symbol: selectedSymbol})}/>
            <div className="center">
                <button hidden={state.symbols.length===0} onClick={() => dispatch({type: 'saveWord'})}>Save this word</button>
            </div>
            <h2>Phaistos Disc signs</h2>
            <SymbolList clicked={(selectedSymbol) => dispatch({type: 'addSymbol', symbol: selectedSymbol})}/>
        </React.Fragment> );

    return (
        <div className="container">
            <Header playDisabled={state.speech.length===0} sound={state.speech}/>
            <button className="toggleButton" onClick={toggleMode}>{wordMode ? "Word Creator" : "Phaistos Disc"}</button>
            {mode}  
        </div>
        );
};


export default symbolSynthesis;