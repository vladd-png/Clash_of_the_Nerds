import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav';
import { resetAnswers } from '../../actions';


describe('Nav', () => {
  let wrapper, mockUser;

  beforeEach(() => {
    mockUser = {
      name: 'Jessica Rabbit',
      team: '19',
      level: 'hard'
    }
    wrapper = shallow(<Nav
      user={[mockUser]}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when mapStateToProps is called', () => {
    let mockState = {
      user: {
        name: 'Jessica Rabbit',
        team: '19',
        level: 'hard'
      },
      trivia: [{}]
    }
    let expected = {
      user: {
        name: 'Jessica Rabbit',
        team: '19',
        level: 'hard'
      }
    }
    const result = mapStateToProps(mockState)
    expect(result).toEqual(expected)
  })

  it('should call dispatch when loadIncorrectGuessToStore is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = resetAnswers()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.loadIncorrectGuessToStore()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})
