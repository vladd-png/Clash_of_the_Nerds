export const incorrectGuessReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INCORRECT_GUESS':
            return [...state, action.guess]
        default:
            return state;
    }
}
