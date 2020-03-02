export const savedReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_TRIVIA':
            return [...state, action.trivia]
        case 'RESET_STORE_ANSWERS':
            return state = []
        default:
            return state;
    }
}
