import { savedReducer } from './savedTrivia';

describe('savedReducer', () => {

  it('should have an initial state of an empty array', () => {
    const expected = []
    const result = savedReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to add trivia to store', () => {
    const mockState = []
    const trivia = {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
      correct_answer: 'Orpheus',
      incorrect_answers: (3) ['Hercules', 'Perseus', 'Daedalus'],
      userGuess: 'Perseus'
    }
    const mockAction = {
      type: 'SAVE_TRIVIA',
      trivia
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
    const result = savedReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })

  it('should reset answers when new action is passed through', () => {
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
    const result = savedReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })

})
