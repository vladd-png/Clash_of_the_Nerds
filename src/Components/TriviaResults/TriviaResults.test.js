import React from 'react';
import { TriviaResults, mapDispatchToProps } from './TriviaResults';
import { shallow } from 'enzyme';
import { saveUsersTrivia } from '../../actions';
import { mockRandom } from 'jest-mock-random';


describe('TriviaResults', () => {
  let wrapper;

  beforeEach(() => {
    mockRandom([0.1]);
    wrapper = shallow(<TriviaResults
      result={[{
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
      }]}
      />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call dispatch with saveUsersTrivia action when saveUsersTrivia is invoked', () => {
    const mockDispatch = jest.fn()
    const mockResult = {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
      correct_answer: 'Athena',
      incorrect_answers: ['Ares','Artemis','Apollo'],
      userGuess: 'Athena'
    }
    const actionToDispatch = saveUsersTrivia(mockResult)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.saveUsersTrivia(mockResult)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})
