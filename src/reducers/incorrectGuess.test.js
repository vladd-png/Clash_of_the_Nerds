import { incorrectGuessReducer } from './incorrectGuess';

describe('incorrectGuessReducer', () => {

  it('should have an initial state of an empty array', () => {
    const expected = []
    const result = incorrectGuessReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to add a guess trivia card to store', () => {
    const mockState = []
    const guess = {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
      correct_answer: 'Orpheus',
      incorrect_answers: (3) ['Hercules', 'Perseus', 'Daedalus'],
      userGuess: 'Perseus'
    }
    const mockAction = {
      type: 'ADD_INCORRECT_GUESS',
      guess
    }
    const expected = [{
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
      correct_answer: 'Orpheus',
      incorrect_answers: (3) ['Hercules', 'Perseus', 'Daedalus'],
      userGuess: 'Perseus'
    }]
    const result = incorrectGuessReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })

  it('should be able to add another trivia card to state', () => {
    const mockState = [{
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
      correct_answer: 'Orpheus',
      incorrect_answers: ['Hercules', 'Perseus', 'Daedalus'],
      userGuess: 'Perseus'
    }]
    const guess = {
      category: 'Mythology',
      type: 'boolean',
      difficulty: 'medium',
      question: 'The Japanese god Izanagi successfully returned his wife Izanami from the Underworld.',
      correct_answer: 'False',
      incorrect_answers: ['True']
    }
    const mockAction = {
      type: 'ADD_INCORRECT_GUESS',
      guess
    }
    const expected = [{
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
      correct_answer: 'Orpheus',
      incorrect_answers: ['Hercules', 'Perseus', 'Daedalus'],
      userGuess: 'Perseus'
    },{
      category: 'Mythology',
      type: 'boolean',
      difficulty: 'medium',
      question: 'The Japanese god Izanagi successfully returned his wife Izanami from the Underworld.',
      correct_answer: 'False',
      incorrect_answers: ['True']
    }]
    const result = incorrectGuessReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })

  it('should reset stored answers when new action is passed through', () => {
    const mockState = [{
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
      correct_answer: 'Orpheus',
      incorrect_answers: (3) ['Hercules', 'Perseus', 'Daedalus'],
      userGuess: 'Perseus'
    }]
    const mockAction = {
      type: 'RESET_STORE_ANSWERS'
    }
    const expected = []
    const result = incorrectGuessReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})
