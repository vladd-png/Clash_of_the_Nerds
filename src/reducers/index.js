import { triviaReducer } from './trivia';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    trivia: triviaReducer
})

export default rootReducer;
