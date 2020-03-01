export const savedReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_TRIVIA':
            return [...state, action.trivia]
        default:
            return state;
    }
}
