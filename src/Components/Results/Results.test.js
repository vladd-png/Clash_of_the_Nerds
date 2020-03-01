import React from 'react';
import Results from './Results';
import { shallow } from 'enzyme';

describe('Results', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Results
      incorrectGuess={[]}
      correctGuess={[]}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
