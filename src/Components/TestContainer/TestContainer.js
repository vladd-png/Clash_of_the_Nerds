import React, { Component } from 'react';
import TriviaCard from '../TriviaCard/TriviaCard';
import './TestContainer.scss';
import { addTrivia } from '../../actions';
import { connect } from 'react-redux';

class TestContainer extends Component{
  constructor() {
    super()
    this.state={
      state: ''
    }
  }
  componentDidMount = () => {
    // let scienceTrivia = fetch('https://opentdb.com/api.php?amount=10&category=17')
    //   .then(response => response.json())
    // let mythologyTrivia = fetch('https://opentdb.com/api.php?amount=10&category=20')
    //   .then(response => response.json())
    // let artTrivia = fetch('https://opentdb.com/api.php?amount=10&category=25')
    //   .then(response => response.json())
    // Promise.all([scienceTrivia, artTrivia, mythologyTrivia])
    //   .then(trivia => {
    //     this.setState({ trivia })
    //     this.props.loadTriviaToStore( trivia )
    //   })
  }
   render() {
     // const triviaDate = this.props.trivia.trivia.map(question => <TriviaCard props={question}/>)
     return (
       <section>
       <article className='test-question'>
       <h1>Hello</h1>
       </article>
       <article className='test-choice'>
       <h1>Hello</h1>
       </article>
       <article className='test-progress'>
       <h1>Hello</h1>
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

// export const mapStateToProps = state => ({
//   trivia: state.trivia
// })

// export default TestContainer;
