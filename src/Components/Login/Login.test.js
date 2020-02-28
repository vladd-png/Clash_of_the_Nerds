import React from 'react';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { shallow } from 'enzyme';
import { addUser } from '../../actions';



describe('Login', () => {
  let wrapper, mockUser, mockFetch;

  beforeEach(() => {
    mockUser = {
      name: 'Jessica Rabbit',
      team: '19',
      level: 'hard'
    }
    mockFetch = jest.fn()
    wrapper = shallow(<Login
      fetchData={mockFetch}
      addUser={jest.fn()}
    />)
  })

  it('should match snapshot', () => {
    // const mockDispatch = jest.fn()
    // const actionToDispatch = addUser(mockUser)
    // const mappedProps = mapDispatchToProps(mockDispatch)
    // mappedProps.loadUserToStore(mockUser)
    // expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    expect(wrapper).toMatchSnapshot()
  })

})
