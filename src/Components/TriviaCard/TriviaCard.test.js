import React from 'react';
import { TriviaCard, mapDispatchToProps } from './TriviaCard';
import { shallow } from 'enzyme';
import { mockRandom } from 'jest-mock-random';
import { addCorrectGuess, addIncorrectGuess } from '../../actions';

describe('TriviaCard', () => {
  let wrapper, trivia, loadCorrectGuessToStoreMock, loadIncorrectGuessToStoreMock;

  beforeEach(() => {
    mockRandom([0.1]);
    trivia={
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
      correct_answer: 'Athena',
      incorrect_answers: ['Ares','Artemis','Apollo'],
      userGuess: 'Athena'
    };
    loadCorrectGuessToStoreMock = jest.fn().mockImplementation();
    loadIncorrectGuessToStoreMock = jest.fn().mockImplementation();
    wrapper = shallow(<TriviaCard
      trivia={trivia}
      changeCard={jest.fn()}
      loadCorrectGuessToStore={loadCorrectGuessToStoreMock}
      loadIncorrectGuessToStore={loadIncorrectGuessToStoreMock}
      />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update correct trivia question when updateChoice is called', () => {
    let mockEvent = {
      target: {
        name: 'title',
        value: 'Athena'
      }
    }
    let mockResponse = {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
      correct_answer: 'Athena',
      incorrect_answers: ['Ares','Artemis','Apollo'],
      userGuess: 'Correct!'
    }
    wrapper.instance().updateChoice(mockEvent)
    expect(loadCorrectGuessToStoreMock).toHaveBeenCalledWith(mockResponse)
  })

  it('should shuffle answers in array before displaying them to user', () => {
    let mockAnswers = ['Ares', 'Artemis', 'Apollo', 'Athena']
    wrapper.instance().shuffle(mockAnswers)
    let expected = ['Athena', 'Apollo', 'Artemis', 'Ares']
    expect(mockAnswers).toEqual(expected);
  })

  it('should update incorrect trivia question when updateChoice is called', () => {
    let mockEvent = {
      target: {
        name: 'title',
        value: 'Apollo'
      }
    }
    let mockResponse = {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
      correct_answer: 'Athena',
      incorrect_answers: ['Ares','Artemis','Apollo'],
      userGuess: 'Apollo'
    }
    wrapper.instance().updateChoice(mockEvent)
    expect(loadIncorrectGuessToStoreMock).toHaveBeenCalledWith(mockResponse)
  })

  it('should call dispatch with the addCorrectGuess action when loadCorrectGuessToStore is called', () => {
    const mockDispatch = jest.fn();
    const trivia = {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
      correct_answer: 'Athena',
      incorrect_answers: ['Ares','Artemis','Apollo'],
      userGuess: 'Athena'
    }
    const actionToDispatch = addCorrectGuess(trivia)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.loadCorrectGuessToStore(trivia)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with the addIncorrectGuess action when loadCorrectGuessToStore is called', () => {
    const mockDispatch = jest.fn();
    const trivia = {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
      correct_answer: 'Athena',
      incorrect_answers: ['Ares','Artemis','Apollo'],
      userGuess: 'Athena'
    }
    const actionToDispatch = addIncorrectGuess(trivia)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.loadIncorrectGuessToStore(trivia)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
