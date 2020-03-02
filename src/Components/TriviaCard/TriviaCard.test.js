import React from 'react';
import { TriviaCard, mapDispatchToProps } from './TriviaCard';
import { shallow } from 'enzyme';
import { mockRandom } from 'jest-mock-random';
import { addCorrectGuess, addIncorrectGuess } from '../../actions';

describe('TriviaCard', () => {
  let wrapper, mockTrivia;

  beforeEach(() => {
    mockRandom([0.1]);
    mockTrivia={
      category: 'Mythology',
      type: 'true/false',
      difficulty: 'easy',
      question: 'Loki dressed as a woman in norse mythology',
      correct_answer: 'true',
      incorrect_answers: ['false'],
      userGuess: 'true'
    },
    {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
      correct_answer: 'Athena',
      incorrect_answers: ['Ares','Artemis','Apollo'],
      userGuess: 'Athena'
    };
    wrapper = shallow(<TriviaCard
      trivia={mockTrivia}
      changeCard={jest.fn()}
      />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
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
