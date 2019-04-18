import React from 'react';
import SymbolItem from './../SymbolList/SymbolItem/SymbolItem';

const selectedSymbols = (props) => {
        const symbolList = props.symbols.map(symbol =>
                <SymbolItem clicked={props.clicked} symbol={symbol} key={symbol.id} styleName="selectedSymbols"/>
                );
        return (
            <div>
                {symbolList}
            </div>
                
            );
};


export default selectedSymbols;