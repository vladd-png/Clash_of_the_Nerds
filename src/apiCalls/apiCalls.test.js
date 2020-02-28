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

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    let mockTeam = '20';
    let mockLevel = 'easy';
    getTrivia(mockTeam, mockLevel);
    expect(window.fetch).toHaveBeenCalledWith(`https://opentdb.com/api.php?amount=10&category=${mockTeam}&difficulty=${mockLevel}`);
  });

})
