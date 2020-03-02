import React from 'react';
import { TestContainer, mapDispatchToProps, mapStateToProps } from './TestContainer';
import { shallow } from 'enzyme';
import { addTrivia } from '../../actions';


describe('TestContainer', () => {
let wrapper, mockTrivia;

  beforeEach(() => {
    mockTrivia = {trivia: [
        {
          category: 'Mythology',
          type: 'true/false',
          difficulty: 'easy',
          question: 'Loki dressed as a woman in norse mythology',
          correct_answer: 'true',
          incorrect_answers: ['false'],
          userGuess: 'true'
        }, {
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'medium',
          question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
          correct_answer: 'Athena',
          incorrect_answers: ['Ares','Artemis','Apollo'],
          userGuess: 'Athena'
        },{
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'easy',
          question: 'What mytological creatures have women&#039;s faces and vultures&#039; bodies?',
          correct_answer: 'Harpies',
          incorrect_answers: [ 'Mermaids', 'Nymph', 'Lilith' ],
          userGuess: 'Mermaids'
        },{
          category: 'Mythology',
          type: 'boolean',
          difficulty: 'medium',
          question: 'The Roman god &quot;Jupiter&quot; was first known as &quot;Zeus&quot; to the Greeks.',
          correct_answer: 'True',
          incorrect_answers: [ 'False' ],
          userGuess: 'True'
        }]}
      wrapper = shallow(<TestContainer
        trivia={mockTrivia}
        />)
  })


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should store  chosenAnswer in state when changeCard is invoked', () => {
    let mockTrivia2 = {
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'medium',
          question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
          correct_answer: 'Athena',
          incorrect_answers: ['Ares','Artemis','Apollo'],
          userGuess: 'Athena'
        }
    wrapper.instance().changeCard(mockTrivia2)
    let expected = [{
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'medium',
          question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
          correct_answer: 'Athena',
          incorrect_answers: ['Ares','Artemis','Apollo'],
          userGuess: 'Athena'
        }]
    expect(wrapper.state('chosenAnswer')).toEqual(expected)
  })

  describe('Syntax changes in trivia question data', () => {

    it('should be able to replace &#039; with \'', () => {
      let result = wrapper.instance().formatQuestion()
      let expected = [{
        category: 'Mythology',
        type: 'true/false',
        difficulty: 'easy',
        question: 'Loki dressed as a woman in norse mythology',
        correct_answer: 'true',
        incorrect_answers: ['false'],
        userGuess: 'true'
      },{
        category: 'Mythology',
        type: 'multiple',
        difficulty: 'medium',
        question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
        correct_answer: 'Athena',
        incorrect_answers: ['Ares','Artemis','Apollo'],
        userGuess: 'Athena'
      },{
        category: 'Mythology',
        type: 'multiple',
        difficulty: 'easy',
        question: 'What mytological creatures have women\'s faces and vultures\' bodies?',
        correct_answer: 'Harpies',
        incorrect_answers: [ 'Mermaids', 'Nymph', 'Lilith' ],
        userGuess: 'Mermaids'
      },{
        category: 'Mythology',
        type: 'boolean',
        difficulty: 'medium',
        question: 'The Roman god "Jupiter" was first known as "Zeus" to the Greeks.',
        correct_answer: 'True',
        incorrect_answers: [ 'False' ],
        userGuess: 'True'
      }]
      expect(result).toEqual(expected)
    })

    it('should be able to replace &quot; with "', () => {
      let result = wrapper.instance().formatQuestion()
      let expected = [{
        category: 'Mythology',
        type: 'true/false',
        difficulty: 'easy',
        question: 'Loki dressed as a woman in norse mythology',
        correct_answer: 'true',
        incorrect_answers: ['false'],
        userGuess: 'true'
      },{
        category: 'Mythology',
        type: 'multiple',
        difficulty: 'medium',
        question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
        correct_answer: 'Athena',
        incorrect_answers: ['Ares','Artemis','Apollo'],
        userGuess: 'Athena'
      },{
        category: 'Mythology',
        type: 'multiple',
        difficulty: 'easy',
        question: 'What mytological creatures have women\'s faces and vultures\' bodies?',
        correct_answer: 'Harpies',
        incorrect_answers: [ 'Mermaids', 'Nymph', 'Lilith' ],
        userGuess: 'Mermaids'
      },{
        category: 'Mythology',
        type: 'boolean',
        difficulty: 'medium',
        question: 'The Roman god "Jupiter" was first known as "Zeus" to the Greeks.',
        correct_answer: 'True',
        incorrect_answers: [ 'False' ],
        userGuess: 'True'
      }]
      expect(result).toEqual(expected)
    })
  })

  it('should update state from the store wit trivia data from mapStateToProps', () => {
    let mockState = mockTrivia
    let expected = { trivia: { trivia: [
        {
          category: 'Mythology',
          type: 'true/false',
          difficulty: 'easy',
          question: 'Loki dressed as a woman in norse mythology',
          correct_answer: 'true',
          incorrect_answers: ['false'],
          userGuess: 'true'
        }, {
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'medium',
          question: 'This Greek mythological figure is the god/goddess of battle strategy (among other things).',
          correct_answer: 'Athena',
          incorrect_answers: ['Ares','Artemis','Apollo'],
          userGuess: 'Athena'
        },{
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'easy',
          question: 'What mytological creatures have women&#039;s faces and vultures&#039; bodies?',
          correct_answer: 'Harpies',
          incorrect_answers: [ 'Mermaids', 'Nymph', 'Lilith' ],
          userGuess: 'Mermaids'
        },{
          category: 'Mythology',
          type: 'boolean',
          difficulty: 'medium',
          question: 'The Roman god &quot;Jupiter&quot; was first known as &quot;Zeus&quot; to the Greeks.',
          correct_answer: 'True',
          incorrect_answers: [ 'False' ],
          userGuess: 'True'
        }]}}
    const result = mapStateToProps(mockState)
    expect(result).toEqual(expected)
  })

  it('should  call dispatch with the addTrivia action when loadTriviaToStore is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addTrivia(mockTrivia)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.loadTriviaToStore(mockTrivia)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})
