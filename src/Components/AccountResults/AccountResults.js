import React from 'react';
import './AccountResults.scss';
import PropTypes from 'prop-types';

export const AccountResults = (props) => {
  return (
    <div className='accounts-card'>
      <h2>{props.result.question}</h2>
      <h4>Your Answer: {props.result.userGuess}</h4>
      <h4>Correct Answer: {props.result.correct_answer}</h4>
    </div>
  )
}

AccountResults.propTypes = {
  result: PropTypes.object
}

export default AccountResults
