import React from 'react';
import './TriviaCard.scss';

// category: "Mythology"
// type: "multiple"
// difficulty: "easy"
// question: "The greek god Poseidon was the god of what?"
// correct_answer: "The Sea"
// incorrect_answers: (3) ["War", "Sun", "Fire"]

const TriviaCard = (props) => {
  // console.log(props.trivia);
  return (
    <div className='trivia-card'>
      <h1>{props.trivia.question}</h1>
      <h1>{props.trivia.correct_answer}</h1>
      <h1>{props.trivia.incorrect_answers}</h1>
    </div>
  )
}

export default TriviaCard;
