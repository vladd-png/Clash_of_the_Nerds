import React from 'react';
import { TestContainer } from './TestContainer';
import { shallow } from 'enzyme';

describe('TestContainer', () => {
  let mockTrivia = [
    {
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
    }
  ]

  it('should match snapshot', () => {
    let wrapper = shallow(<TestContainer
      trivia={mockTrivia}
      />)
    expect(wrapper).toMatchSnapshot()
  })
})
