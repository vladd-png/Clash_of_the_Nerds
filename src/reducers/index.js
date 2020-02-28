import { triviaReducer } from './trivia';
import { correctGuessReducer } from './correctGuess';
import { incorrectGuessReducer } from './incorrectGuess';
import { resetAnswersStore } from './reset';
import { userReducer } from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    trivia: triviaReducer,
    correctGuess: correctGuessReducer,
    incorrectGuess: incorrectGuessReducer
})

export default rootReducer;
