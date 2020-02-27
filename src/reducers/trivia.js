export const triviaReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TRIVIA':
            return [...state, ...action.trivia]
        default:
            return state;
    }
}
