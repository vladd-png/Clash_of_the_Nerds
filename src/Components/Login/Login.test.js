import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import { addUser } from '../../actions';

describe('Login', () => {
  let wrapper, mockUser, mockFetchData, mockAddUser;

  beforeEach(() => {
    mockUser = {
      name: 'Jessica Rabbit',
      team: '19',
      level: 'hard'
    }
    mockFetchData = jest.fn().mockImplementation()
    mockAddUser = jest.fn().mockImplementation()
    wrapper = shallow(<Login
      fetchData={mockFetchData}
      addUser={mockAddUser}
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

  it('should set state to clear when submitInfo is called', () => {
    wrapper.setState(mockUser)
    wrapper.instance().submitInfo()
    expect(wrapper.state('name')).toEqual('')
  })

  it('should call addUser and fetchData when submitInfo is called', () => {
    let expected = {
      name: '',
      team: '20',
      level: 'easy'
    }
    let mockLevel = '19'
    let mockTeam = 'hard'
    wrapper.setState(mockUser)
    wrapper.instance().submitInfo()
    expect(mockAddUser).toHaveBeenCalledWith(expected)
    expect(mockFetchData).toHaveBeenCalledWith(mockLevel, mockTeam)
  })

  it('should setstate when the user selects something from the first dropdown', () => {
    let expected = '20'
    wrapper.find('#first-choice').simulate('click')
    expect(wrapper.state('team')).toEqual(expected)
  })

  it('should setstate when the user selects something from the second dropdown', () => {
    let expected = 'easy'
    wrapper.find('#second-choice').simulate('click')
    expect(wrapper.state('level')).toEqual(expected)
  })

})
