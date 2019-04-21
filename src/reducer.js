
import axios from './axios-config';

const reducer = (state, action) => {
    const uuid = require("uuid");
    switch (action.type) {
      case 'addSymbol':
        const uuidValue = uuid.v4();
        const updatedSymbol = {...action.symbol, uuid: uuidValue};
        const updatedSymbols = [...state.symbols, updatedSymbol]
        const updatedSounds = updatedSymbols.map(symbol => symbol.sound);
        const updatedSpeech = updatedSounds.join('');
        return {...state, symbols: updatedSymbols, speech:updatedSpeech};
      case 'removeSymbol':
        const index = state.symbols.findIndex(s => s.uuid === action.symbol.uuid);
        const updatedSymbols2 = [...state.symbols.slice(0, index), ...state.symbols.slice(index+1)];
        const updatedSounds2 = updatedSymbols2.map(symbol => symbol.sound);
        const updatedSpeech2 = updatedSounds2.join('');
        return {...state, symbols: updatedSymbols2, speech:updatedSpeech2};
      case 'selectWord':
        return {...state, speech: action.payload.speechRequest, selectedId: action.payload.id};
      case 'saveWord':
        const word = {
            word: state.symbols,
            speech: state.speech
        };
        axios.post('/words.json', word)
            .then(response => console.log(response))
            .catch(error => console.log(error));
      case 'toggleMode':
        return {...state, symbols: [], speech: "", selectedId: null};
      default:
        throw new Error();
    }
  };

  export default reducer;