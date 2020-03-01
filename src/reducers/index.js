import { triviaReducer } from './trivia';
import { correctGuessReducer } from './correctGuess';
import { incorrectGuessReducer } from './incorrectGuess';
import { userReducer } from './user';
import { savedReducer } from './savedTrivia'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    trivia: triviaReducer,
    correctGuess: correctGuessReducer,
    incorrectGuess: incorrectGuessReducer,
    saveTrivia: savedReducer
})

export default rootReducer;
