import React from 'react';
import { connect } from 'react-redux';
import TriviaResults from '../TriviaResults/TriviaResults';
import './Results.scss';

const Results = (props) => {
  const allWrong = props.incorrectGuess.map(guess => {
    console.log(guess);
    return <TriviaResults result={guess} />
  })
  const totalScore = (10 - props.incorrectGuess.length)
  console.log(totalScore);
  return (
    <section id='all-results'>
      <div className='total-results'>
        <h1>You Scored {totalScore} out of 10 Correct</h1>
      </div>
      <div className='wrong-results'>
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
