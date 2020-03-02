import React from 'react';
import { connect } from 'react-redux';
import TriviaResults from '../TriviaResults/TriviaResults';
import './Results.scss';
import PropTypes from 'prop-types';

export const Results = (props) => {
  const allWrong = props.incorrectGuess.map(guess => {
    return <TriviaResults key={Math.random()} result={guess} />
  })
  const allCorrect = props.correctGuess.map(guess => {
    if (props.correctGuess.length !== 0) {
      return <TriviaResults key={Math.random()} result={guess} />
    } else {
      return 'You Need To Study'
    }
  })
  const totalScore = (10 - props.correctGuess.length)
  const percentCorrect = ((props.correctGuess.length / 10) * 100)
  return (
    <section>
      <div className='total-results'>
        <h1>You Scored {percentCorrect} % Correct</h1>
      </div>
      <div className='total-results' id='percent-correct'>
        <h1>You Missed {totalScore} out of 10</h1>
      </div>
      <div className='wrong-results'>
        <h1 className='wrong-title'>You Missed</h1>
        {allWrong}
      </div>
      <div className='correct-results'>
        <h1 className='wrong-title'>You Answered Correct</h1>
        {allCorrect}
      </div>
    </section>
  )
}

Results.propTypes = {
  correctGuess: PropTypes.array,
  incorrectGuess: PropTypes.array
}

export const mapStateToProps = state => ({
  correctGuess: state.correctGuess,
  incorrectGuess: state.incorrectGuess
});

export default connect(mapStateToProps)(Results)
