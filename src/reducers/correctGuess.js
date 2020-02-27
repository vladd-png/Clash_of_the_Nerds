export const correctGuessReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CORRECT_GUESS':
            return [...state, action.guess]
        default:
            return state;
    }
}
