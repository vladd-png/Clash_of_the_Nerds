export const addUser = (user) => ({
    type: 'ADD_USER',
    user
})

export const addTrivia = (trivia) => ({
    type: 'ADD_TRIVIA',
    trivia
})

export const addCorrectGuess = (guess) => ({
  type: 'ADD_CORRECT_GUESS',
  guess
})

export const addIncorrectGuess = (guess) => ({
  type: 'ADD_INCORRECT_GUESS',
  guess
})

export const resetAnswers = () => ({
  type: 'RESET_STORE_ANSWERS'
})

export const saveUsersTrivia = (trivia) => ({
  type: 'SAVE_TRIVIA',
  trivia
})
