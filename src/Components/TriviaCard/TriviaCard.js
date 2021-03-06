import React, { Component } from 'react';
import './TriviaCard.scss';
import { connect } from 'react-redux';
import { addIncorrectGuess, addCorrectGuess } from '../../actions';
import PropTypes from 'prop-types';

export class TriviaCard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      choice: ''
    }
  }
  updateChoice = (event) => {
    if(event.target.value === this.props.trivia.correct_answer) {
      let correctObj = {...this.props.trivia, userGuess: 'Correct!'}
      this.props.loadCorrectGuessToStore(correctObj)
    } else {
      let errorObject = {...this.props.trivia, userGuess: event.target.value}
      this.props.loadIncorrectGuessToStore(errorObject)
    }
    this.setState({ choice: event.target.value })
    this.props.changeCard(this.props.trivia)
  }
  shuffle = (allAnswers) => {
    allAnswers.sort(() => Math.random() - 0.5);
  }
  render() {
    let allAnswers = this.props.trivia.incorrect_answers.concat(this.props.trivia.correct_answer)
    this.shuffle(allAnswers)
    let formattedAnswers = allAnswers.map(answer => {
      return <button type='button' className='trivia-choice' value={answer} key={Math.random()} onClick={this.updateChoice}>{answer}</button>
    })
    return (
      <div className='trivia-card'>
        <div>{formattedAnswers}</div>
      </div>
    )
  }
}

TriviaCard.propTypes = {
  trivia: PropTypes.object
}

export const mapDispatchToProps = dispatch => ({
  loadCorrectGuessToStore: (guess) => { dispatch(addCorrectGuess(guess)) },
  loadIncorrectGuessToStore: (guess) => { dispatch(addIncorrectGuess(guess)) }
})

export default connect(null, mapDispatchToProps)(TriviaCard)
