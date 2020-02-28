import React from 'react';
import LoadingPage from './LoadingPage';
import { shallow } from 'enzyme';

describe('LoadingPage', () => {

  it('should match snapshot', () => {
    let wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
