import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Nerds from '../Nerds/Nerds';
import LoadingPage from '../LoadingPage/LoadingPage';
import TestContainer from '../TestContainer/TestContainer';
import { Route, Switch } from 'react-router-dom';
import { addTrivia } from '../../actions';
import { connect } from 'react-redux';

class App extends Component{
  constructor() {
    super()
    this.state = {
      user: {
        name: '',
        team: '20',
        level: 'easy'
      },
      chosen: '20',
      trivia: []
    }
  }
  fetchData = (team, level) => {
    console.log(team, level);
    fetch(`https://opentdb.com/api.php?amount=10&category=${team}&difficulty=${level}`)
      .then(response => response.json())
      .then(trivia => {
        this.setState({ trivia })
        this.props.loadTriviaToStore( trivia.results )
      })
  }
  addUser = (user) => {
    this.setState({ user })
    this.setState({ chosen: user.team })
  }
  render() {
    return (
      <div className='App'>
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <section>
              <Login addUser={this.addUser} fetchData={this.fetchData}/>
              <Nerds />
            </section>
          )}}/>
        <Route exact path='/test' render={() => {
          return (
            <section>
              {!this.props.trivia.trivia.length && <LoadingPage />}
              {this.props.trivia.trivia.length &&<TestContainer trivia={this.props.trivia} />}
            </section>
          )}} />
      </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  loadTriviaToStore: (trivia) => { dispatch(addTrivia(trivia)) }
})

export const mapStateToProps = state => ({
  trivia: state
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
