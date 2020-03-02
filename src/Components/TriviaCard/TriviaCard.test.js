import React from 'react';
import { TriviaCard } from './TriviaCard';
import { shallow } from 'enzyme';
import { mockRandom } from 'jest-mock-random';

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
})
