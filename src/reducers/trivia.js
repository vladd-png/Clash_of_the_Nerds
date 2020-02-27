export const triviaReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TRIVIA':
            return [...action.trivia]
        default:
            return state;
    }
}
