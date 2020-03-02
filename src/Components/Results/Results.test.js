import React from 'react';
import { Results } from './Results';
import { shallow } from 'enzyme';
import { mockRandom } from 'jest-mock-random';


describe('Results', () => {
  let wrapper;

  beforeEach(() => {
    mockRandom([0.1]);
    wrapper = shallow(<Results
      incorrectGuess={[
        {
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'easy',
          question: 'The greek god Poseidon was the god of what?',
          correct_answer: 'The Sea',
          incorrect_answers: ['War', 'Sun', 'Fire'],
          userGuess: 'War'
        }
      ]}
      correctGuess={[
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
      ]}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should', () => {

  })
})
