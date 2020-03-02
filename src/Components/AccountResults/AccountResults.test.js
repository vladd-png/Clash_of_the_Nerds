import React from 'react';
import { AccountResults } from './AccountResults';
import { shallow } from 'enzyme';

describe('AccountResults', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<AccountResults
      result={{
        category: 'Mythology',
        type: 'multiple',
        difficulty: 'medium',
        question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
        correct_answer: 'Athena',
        incorrect_answers: ['Ares','Artemis','Apollo'],
        userGuess: 'Athena'
      }}
      />)
    expect(wrapper).toMatchSnapshot()
  })
})
