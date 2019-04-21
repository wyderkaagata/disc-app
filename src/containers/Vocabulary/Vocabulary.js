import React, {useState, useEffect} from 'react';
import Header from './../../components/Header/Header';
import axios from './../../axios-config';
import CreatedWord from './../../components/CreatedWord/CreatedWord';

const vocabulary  = props => {
    const [selectedWord, setSelectedWord] = useState({speech:null, id:null});
    const [loading, setLoading]= useState(true);
    const [words, setWords] = useState([]);

    useEffect(() => {
        axios.get('/words.json')
            .then(function (res) {
                
                let fetchedWords = [];
                for ( let key in res.data ) {
                    fetchedWords.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                setWords(fetchedWords);    
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);

    const selectHandler = (word) => {
        setSelectedWord(word);
    }

    let wordsList = loading ? <p>Loading...</p>
        : words.map(w => <CreatedWord key={w.id} id={w.id} symbols={w.word} speech={w.speech} selected={selectedWord.id === w.id ?  true : false} clicked={selectHandler}/>)
    
    
    return(
        <div className="container">
        <Header playDisabled={selectedWord.speech === null} sound={selectedWord.speech}/>
        <div>
            {wordsList}
        </div>
        </div>
        
    );
};

export default vocabulary;