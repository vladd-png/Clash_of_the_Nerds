import React from 'react';
import './TriviaResults.scss';
import { saveUsersTrivia } from '../../actions';
import { connect } from 'react-redux';



// category: "Mythology"
// type: "multiple"
// difficulty: "easy"
// question: "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?"
// correct_answer: "Orpheus"
// incorrect_answers: (3) ["Hercules", "Perseus", "Daedalus"]
// userGuess: "Perseus"

export const TriviaResults = (props) => {
  const updateStoreAnswers = () => {
    props.saveTrivia(props.result)
  }
  return (
    <div className='results-card'>
      <h2>{props.result.question}</h2>
      <h4>Your Answer: {props.result.userGuess}</h4>
      <h4>Correct Answer: {props.result.correct_answer}</h4>
      <button type='button' onClick={updateStoreAnswers}>Save Card</button>
    </div>
  )
}


export const mapDispatchToProps = dispatch => ({
  saveTrivia: (trivia) => { dispatch(saveUsersTrivia(trivia)) },
})

export default connect(null, mapDispatchToProps)(TriviaResults)
