import React from 'react';
import SymbolItem from './../SymbolList/SymbolItem/SymbolItem';
import './CreatedWord.css';


const createdWord = props => {
    const clickHandler = (symbol) => {
        return;
    }

    const wordItem = props.symbols.map((symbol, id) =>
        <SymbolItem symbol={symbol} key={id} styleName="word" clicked={clickHandler}/>);
    let classes = props.selected ? "wordItem selected" : "wordItem";

    return (
        <div className={classes} onClick={() => props.clicked({speech: props.speech, id: props.id})}>
            {wordItem}
        </div>
        
    );

};

export default createdWord;