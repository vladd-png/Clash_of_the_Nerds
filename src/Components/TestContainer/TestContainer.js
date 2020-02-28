import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Results from '../Results/Results.js';
import TriviaCard from '../TriviaCard/TriviaCard';
import './TestContainer.scss';
import { addTrivia } from '../../actions';
import { connect } from 'react-redux';
let currentQuestion, triviaData;
let questions;
let i = 0;

class TestContainer extends Component {
  constructor() {
    super()
    this.state={
      currentQuestion: [],
      redirect: false
    }
  }
  componentDidMount = () => {
    i = 0;
  }
  changeCard = (triviaData) => {
    if (i < 9 ) {
      console.log('first', i);
      i++
      this.setState({ chosenAnswer: [...this.state.currentQuestion, triviaData] })
      // return triviaData = <TriviaCard trivia={questions[i]} changeCard={this.changeCard} />
    } else {
      console.log('second', i);
      return null
      // i = 9;
      // return i
    }
  }
  formatQuestion = () => {
    questions = [];
    this.props.trivia.trivia.forEach(question => {
      if (question.question.includes('&#039;')) {
        let newQuestionObj = { ...question, question: question.question.replace('&#039;', '\'').replace('&#039;', '\'') }
        questions.push(newQuestionObj)
      } else if (question.question.includes('&amp;')) {
        let newQuestionObj = { ...question, question: question.question.replace('&amp;', '&') }
        questions.push(newQuestionObj)
      } else if (question.question.includes('&quot;')) {
        let newQuestionObj = { ...question, question: question.question.replace('&quot;', '\"').replace('&quot;', '\"') }
        questions.push(newQuestionObj)
      } else if (question.question.includes('&rsquo;s')) {
        let newQuestionObj = { ...question, question: question.question.replace('&rsquo;s', '\'s') }
        questions.push(newQuestionObj)
      } else {
        questions.push(question)
      }
    })
    return questions;
  }
   render() {
     this.formatQuestion();
     const triviaData = <TriviaCard trivia={questions[i]} changeCard={this.changeCard} />
     return (
       <section>
          <h1 className='trivia-category'>{questions[i].category}</h1>
          <h2 className='trivia-difficulty'>Difficulty: {questions[i].difficulty}</h2>
          <article className='test-question'>
          <h1 className='trivia-header'>Question: {i + 1}</h1>
          <h1 className='trivia-question'>{questions[i].question}</h1>
         </article>
         <article className='test-choice'>
          <div>{ i === 9 ?
            <section>
              <Link to='/results'><h1>{triviaData}</h1></Link>
            </section>
            : <h1>{triviaData}</h1> }</div>
         </article>
         <article className='test-progress'>
          <h1></h1>
         </article>
       </section>
     )
   }
}

export const mapDispatchToProps = dispatch => ({
  loadTriviaToStore: (trivia) => { dispatch(addTrivia(trivia)) }
})

export const mapStateToProps = state => ({
  trivia: state
});

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)
