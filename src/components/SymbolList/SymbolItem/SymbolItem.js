import React from 'react';
import './SymbolItem.css';

const symbolItem = (props) => {
        const url = props.symbol.url;
        return(
        <div className={props.styleName} onClick={ () => props.clicked(props.symbol)} disabled>
                <img  src={require(`${url}`)} alt={props.symbol.id} />
        </div>
);
        };

export default symbolItem;