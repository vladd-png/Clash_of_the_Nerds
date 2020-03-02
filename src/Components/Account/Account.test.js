import React from 'react';
import { Account, mapStateToProps } from './Account';
import { shallow } from 'enzyme';
import { mockRandom } from 'jest-mock-random';


describe('Account', () => {
  mockRandom([0.1]);
  let wrapper = shallow(<Account
      saveTrivia={[
        {category: 'Mythology',
        type: 'multiple',
        difficulty: 'easy',
        question: 'The greek god Poseidon was the god of what?',
        correct_answer: 'The Sea',
        incorrect_answers: ['War', 'Sun', 'Fire']
      }]}
      user={[{
        name: 'Jessica Rabbit',
        team: '19',
        level: 'hard'
      }]}
    />)

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should be able to update state', () => {
      let mockState= {
        user: {
          name: 'Jessica Rabbit',
          team: '19',
          level: 'hard'
        },
        saveTrivia: [
          {category: 'Mythology',
          type: 'multiple',
          difficulty: 'easy',
          question: 'The greek god Poseidon was the god of what?',
          correct_answer: 'The Sea',
          incorrect_answers: ['War', 'Sun', 'Fire']
        }]
      };
      const expected = {
        user: {
          name: 'Jessica Rabbit',
          team: '19',
          level: 'hard'
        },
        saveTrivia: [
          {category: 'Mythology',
          type: 'multiple',
          difficulty: 'easy',
          question: 'The greek god Poseidon was the god of what?',
          correct_answer: 'The Sea',
          incorrect_answers: ['War', 'Sun', 'Fire']
        }]
      };
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })

})
