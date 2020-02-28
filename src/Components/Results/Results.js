import React from 'react';
import { connect } from 'react-redux';
import TriviaResults from '../TriviaResults/TriviaResults';
import './Results.scss';

const Results = (props) => {
  const allWrong = props.incorrectGuess.map(guess => {
    console.log(guess);
    return <TriviaResults result={guess} />
  })
  const totalScore = (10 - props.correctGuess.length)
  const percentCorrect = ((props.correctGuess.length / 10) * 100)
  return (
    <section id='all-results'>
      <div className='total-results'>
        <h1>You Scored {percentCorrect} % Correct</h1>
      </div>
      <div className='total-results' id='percent-correct'>
        <h1>You Missed {totalScore} out of 10</h1>
      </div>
      <div className='wrong-results'>
        <h1 className='wrong-title'>You Missed The Following</h1>
        {allWrong}
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  correctGuess: state.correctGuess,
  incorrectGuess: state.incorrectGuess
});

export default connect(mapStateToProps)(Results)
