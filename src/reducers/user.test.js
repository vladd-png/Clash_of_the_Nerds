import { userReducer } from './user';

describe('userReducer', () => {

  it('should have an initial state of an empty array', () => {
    const expected = []
    const result = userReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to log a user in', () => {
    const mockState = []
    const user = {
      name: 'Jessica Rabbit',
      team: '19',
      level: 'hard'
    }
    const mockAction = {
      type: 'ADD_USER',
      user
    }
    const expected = [{
      name: 'Jessica Rabbit',
      team: '19',
      level: 'hard'
    }]
    const result = userReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

})
