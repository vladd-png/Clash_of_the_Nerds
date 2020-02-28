import React from 'react';
import { render } from '@testing-library/react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { addTrivia, addUser } from '../../actions';

describe('App', () => {

  describe('fetchData', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />)
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('mapStateToProps', () => {
      it('should be able to update state', () => {
        let mockState = [{
          category: "Mythology",
          type: "multiple",
          difficulty: "easy",
          question: "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
          correct_answer: "Orpheus",
          incorrect_answers: (3) ["Hercules", "Perseus", "Daedalus"],
          userGuess: "Perseus"
        },{
          category: "Mythology",
          type: "multiple",
          difficulty: "medium",
          question: "Hera is god of...",
          correct_answer: "Marriage",
          incorrect_answers: ["Agriculture", "Sea", "War"],
          userGuess: "Sea"
        }]
        const expected = {
          trivia: [{
            category: "Mythology",
            type: "multiple",
            difficulty: "easy",
            question: "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
            correct_answer: "Orpheus",
            incorrect_answers: (3) ["Hercules", "Perseus", "Daedalus"],
            userGuess: "Perseus"
          },{
            category: "Mythology",
            type: "multiple",
            difficulty: "medium",
            question: "Hera is god of...",
            correct_answer: "Marriage",
            incorrect_answers: ["Agriculture", "Sea", "War"],
            userGuess: "Sea"
          }],
        }
        const result = mapStateToProps(mockState)
        expect(result).toEqual(expected)
      })
    })

    describe('mapDispatchToProps', () => {
      it('should call dispatch with the trivia results action when loadTriviaToStore is called', () => {
        const mockDispatch = jest.fn();
        const trivia = [{
          category: "Mythology",
          type: "multiple",
          difficulty: "easy",
          question: "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
          correct_answer: "Orpheus",
          incorrect_answers: (3) ["Hercules", "Perseus", "Daedalus"],
          userGuess: "Perseus"
        },{
          category: "Mythology",
          type: "multiple",
          difficulty: "medium",
          question: "Hera is god of...",
          correct_answer: "Marriage",
          incorrect_answers: ["Agriculture", "Sea", "War"],
          userGuess: "Sea"
        }]
        const actionToDispatch = addTrivia(trivia)
        const mappedProps = mapDispatchToProps(mockDispatch)
        mappedProps.loadTriviaToStore(trivia)
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      })

      it('should call dispatch with the guest action when loadUserToStore is called', () => {
        const mockDispatch = jest.fn();
        const user = {
          name: 'Jessica Rabbit',
          team: '19',
          level: 'hard'
        }
        const actionToDispatch = addUser(user)
        const mappedProps = mapDispatchToProps(mockDispatch)
        mappedProps.loadUserToStore(user)
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      })

    })
  })
})
