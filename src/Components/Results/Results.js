import React from 'react';
import { connect } from 'react-redux';
import TriviaResults from '../TriviaResults/TriviaResults';
import './Results.scss';

const Results = (props) => {
  const allWrong = props.incorrectGuess.map(guess => {
    console.log(guess);
    return <TriviaResults result={guess} />
  })
  return (
    <section id='all-results'>
      {allWrong}
    </section>
  )
}

export const mapStateToProps = state => ({
  correctGuess: state.correctGuess,
  incorrectGuess: state.incorrectGuess
});

export default connect(mapStateToProps)(Results)
