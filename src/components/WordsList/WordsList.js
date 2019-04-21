import React, {useState, useEffect} from 'react';
import wordsA from './wordsA';
import wordsB from './wordsB';
import WordItem from './WordItem/WordItem';
import './WordsList.css';


const wordsList = props => {
    const [sideMode, setSideMode] = useState(true); // set side to sideA
    let sideA;
    let sideB;
   

    const toggleHandler = () => {
        setSideMode(!sideMode);
        props.clicked("", null);
    }

    if(sideMode)
    {
        sideA = wordsA.map(w => <WordItem
            key={w.id}
            id={w.id}
            word={w.word}
            selected={props.selected === w.id ?  true : false}
            clicked={props.clicked} />); 
    }
    else {
        console.log("create");
        sideB = wordsB.map(w => <WordItem
            key={w.id}
            id={w.id} 
            word={w.word}
            selected={props.selected === w.id ?  true : false}
            clicked={props.clicked} />);
    }


   useEffect(() => {
       
       if (props.selected)
       {
        if(sideMode)
        {
            sideA = wordsA.map(w => <WordItem
                key={w.id}
                id={w.id}
                word={w.word}
                selected={props.selected === w.id ?  true : false}
                clicked={props.clicked} />); 
        }
        else {
            sideB = wordsB.map(w => <WordItem
                key={w.id}
                id={w.id} 
                word={w.word}
                selected={props.selected === w.id ?  true : false} 
                clicked={props.clicked} />);
        }
       }
   }, [props.selected]);


   const mode = sideMode ? <React.Fragment><h2>Phaistos Disc - Side A</h2>
    <div>
        {sideA}
    </div></React.Fragment>
     : <React.Fragment><h2>Phaistos Disc - Side B</h2><div>
        {sideB}
    </div></React.Fragment>



    return (
        <React.Fragment>
          <button onClick={toggleHandler}>{sideMode ? "Side B" : "Side A"}</button>
        <div className="center">
            {mode}
        </div>
        </React.Fragment>

    );

};


export default wordsList;