import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Results from '../Results/Results.js';
import TriviaCard from '../TriviaCard/TriviaCard';
import './TestContainer.scss';
import { addTrivia } from '../../actions';
import { connect } from 'react-redux';
let i = 0;
let currentQuestion, triviaData;
let questions;

class TestContainer extends Component {
  constructor() {
    super()
    this.state={
      currentQuestion: [],
      redirect: false
    }
  }
  changeCard = (triviaData) => {
    if (i < 9 ) {
      i++
      this.setState({ chosenAnswer: [...this.state.currentQuestion, triviaData] })
    }
  }
   render() {
     questions = [];
     this.props.trivia.trivia.forEach(question => {
       questions.push(question)
     })
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
              <h1>{triviaData}</h1>
              <Link to='/results'>
                <button className='results-route' type='button'>See Results</button>
              </Link>
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
