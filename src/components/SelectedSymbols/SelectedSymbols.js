import React from 'react';
import SymbolItem from './../SymbolList/SymbolItem/SymbolItem';

const selectedSymbols = (props) => {
        const symbolList = props.symbols.map((symbol, index) =>
                <SymbolItem clicked={props.clicked} symbol={symbol} key={index} styleName="selectedSymbols"/>
                );
        return (
            <div>
                {symbolList}
            </div>
                
            );
};


export default selectedSymbols;