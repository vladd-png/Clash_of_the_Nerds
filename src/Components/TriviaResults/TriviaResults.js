import React from 'react';
import './TriviaResults.scss';
import { saveUsersTrivia } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const TriviaResults = (props) => {
  const updateStoreAnswers = () => {
    props.saveUsersTrivia(props.result)
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

TriviaResults.propTypes = {
  result: PropTypes.array
}

export const mapDispatchToProps = dispatch => ({
  saveUsersTrivia: (trivia) => { dispatch(saveUsersTrivia(trivia)) },
})

export default connect(null, mapDispatchToProps)(TriviaResults)
