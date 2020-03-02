import { triviaReducer } from './trivia';

describe('triviaReducer', () => {

  it('should have an initial state of an empty array', () => {
    const expected = []
    const result = triviaReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to log a user in', () => {
    const mockState = []
    const trivia = [{
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?',
      correct_answer: 'Orpheus',
      incorrect_answers: (3) ['Hercules', 'Perseus', 'Daedalus'],
      userGuess: 'Perseus'
    },{
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Hera is god of...',
      correct_answer: 'Marriage',
      incorrect_answers: ['Agriculture', 'Sea', 'War'],
      userGuess: 'Sea'
    }]
    const mockAction = {
      type: 'ADD_TRIVIA',
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
    },{
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Hera is god of...',
      correct_answer: 'Marriage',
      incorrect_answers: ['Agriculture', 'Sea', 'War'],
      userGuess: 'Sea'
    }]
    const result = triviaReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })

})
