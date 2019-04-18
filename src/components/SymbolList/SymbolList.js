import React from 'react';
import SymbolItem from './SymbolItem/SymbolItem';
import symbols from './SymbolItem/symbols';

const symbolList = (props) => {
        const symbolList = symbols.map(symbol =>
                <SymbolItem clicked={props.clicked} symbol={symbol} key={symbol.id} styleName="symbolList"/>
                );
        return (
                <div>
                        {symbolList}
                </div>
                
        )
};


export default symbolList;