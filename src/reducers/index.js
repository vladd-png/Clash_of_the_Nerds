import { triviaReducer } from './trivia';
import { correctGuessReducer } from './correctGuess';
import { incorrectGuessReducer} from './incorrectGuess';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    trivia: triviaReducer,
    correctGuess: correctGuessReducer,
    incorrectGuess: incorrectGuessReducer
})

export default rootReducer;
