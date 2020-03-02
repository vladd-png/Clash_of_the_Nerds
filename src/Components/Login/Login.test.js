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
    wrapper = shallow(<Login
      fetchData={jest.fn()}
      addUser={jest.fn()}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when component mounts', () => {
    let expected = { name: '', team: '20', level: 'easy', formCompleted: false }
    expect(wrapper.state()).toEqual(expected)
  })

  it('should update state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Jessica Rabbit'
      }
    }
    let expected = 'Jessica Rabbit'
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('name')).toEqual(expected)
  })

  // it('should call addUser and fetchData when submitInfo is called', () => {
  //   let mockBattleTeam = '19'
  //   let mockBattleLevel = 'hard'
  //   wrapper.instance().submitInfo()
  //   // expect(wrapper.addUser).toHaveBeenCalledWith(mockUser)
  //   expect(wrapper.instance().fetchData).toHaveBeenCalledWith(mockBattleTeam, mockBattleLevel)
  // })

  it('should set state when submitInfo is called', () => {
    wrapper.setState(mockUser)
    wrapper.instance().submitInfo()
    expect(wrapper.state('name')).toEqual('')
  })

})

// const mockDispatch = jest.fn()
// const actionToDispatch = addUser(mockUser)
// const mappedProps = mapDispatchToProps(mockDispatch)
// mappedProps.loadUserToStore(mockUser)
// expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
