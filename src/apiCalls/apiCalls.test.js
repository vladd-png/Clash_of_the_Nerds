import { getTrivia } from './apiCalls';

describe('fetchData', () => {
  let mockResponse = [{
    category: "Mythology",
    type: "multiple",
    difficulty: "easy",
    question: "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
    correct_answer: "Orpheus",
    incorrect_answers: (3) ["Hercules", "Perseus", "Daedalus"],
    userGuess: "Perseus"
  }];
  let mockTeam;
  let mockLevel;

  beforeEach(() => {
    mockTeam = '20';
    mockLevel = 'easy';
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getTrivia(mockTeam, mockLevel);
    expect(window.fetch).toHaveBeenCalledWith(`https://opentdb.com/api.php?amount=10&category=${mockTeam}&difficulty=${mockLevel}`);
  });

  it('HAPPY: should return an array of trivia objects', () => {
    expect(getTrivia(mockTeam, mockLevel)).resolves.toEqual(mockResponse)
  });

  it('SAD: should return an error if ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getTrivia(mockTeam, mockLevel)).rejects.toEqual(Error('Error while fetching.'))
  });

  it('SAD: should return an error if Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error while fetching.'))
    })
    expect(getTrivia(mockTeam, mockLevel)).rejects.toEqual(Error('Error while fetching.'))
  })

})
