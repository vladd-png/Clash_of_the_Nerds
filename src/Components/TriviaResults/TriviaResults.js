import React from 'react';
import './TriviaResults.scss'

// category: "Mythology"
// type: "multiple"
// difficulty: "easy"
// question: "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?"
// correct_answer: "Orpheus"
// incorrect_answers: (3) ["Hercules", "Perseus", "Daedalus"]
// userGuess: "Perseus"

const TriviaResults = (props) => {
  return (
    <div className='results-card'>
      <h2>{props.result.question}</h2>
      <h4>Your Answer: {props.result.userGuess}</h4>
      <h4>Correct Answer: {props.result.correct_answer}</h4>
      <button type='button' onClick={null}>Save Card</button>
    </div>
  )
}

export default TriviaResults;
