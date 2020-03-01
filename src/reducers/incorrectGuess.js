export const incorrectGuessReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INCORRECT_GUESS':
            return [...state, action.guess]
        case 'RESET_STORE_ANSWERS':
            return state = []
        default:
            return state;
    }
}
