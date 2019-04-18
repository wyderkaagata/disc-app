import React from 'react';
import SymbolItem from './../../SymbolList/SymbolItem/SymbolItem';
import symbols from './../../SymbolList/SymbolItem/symbols';
import './WordItem.css';


const wordItem = props => {
    const clickHandler = (symbol) => {
        return;
    }

    const word = props.word.map(id => symbols.find(s => s.id === id));
    const wordItem = word.map(symbol =>
        <SymbolItem symbol={symbol} key={'{props.word.id}{symbol.id}'} styleName="word" clicked={clickHandler}/>);
    const sounds = word.map(symbol => symbol.sound);
    const speech = sounds.join('');
    let classes = props.selected ? "wordItem selected" : "wordItem";

    return (
        <div className={classes} onClick={() => props.clicked(speech, props.id)}>
            {wordItem}
        </div>
        
    );

};

export default wordItem;