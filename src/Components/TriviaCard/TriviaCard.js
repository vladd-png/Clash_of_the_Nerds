import React from 'react';
import './TriviaCard.scss';

// category: "Mythology"
// type: "multiple"
// difficulty: "easy"
// question: "The greek god Poseidon was the god of what?"
// correct_answer: "The Sea"
// incorrect_answers: (3) ["War", "Sun", "Fire"]

const TriviaCard = (props) => {
  let allAnswers = props.trivia.incorrect_answers.concat(props.trivia.correct_answer)
  let formattedAnswers = allAnswers.map(answer => {
    return <button type='button' className='trivia-choice' key={Math.random()}>{answer}</button>
  })
  return (
    <div className='trivia-card'>
      <h1>{props.trivia.question}</h1>
      <div>{formattedAnswers}</div>
    </div>
  )
}

export default TriviaCard;
