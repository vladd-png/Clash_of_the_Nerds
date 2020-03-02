import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Nerds from '../Nerds/Nerds';
import Results from '../Results/Results.js';
import LoadingPage from '../LoadingPage/LoadingPage';
import Nav from '../Nav/Nav';
import Account from '../Account/Account';
import TestContainer from '../TestContainer/TestContainer';
import BadPathPage from '../BadPathPage/BadPathPage';
import { Route, Switch } from 'react-router-dom';
import { addTrivia, addUser } from '../../actions';
import { connect } from 'react-redux';
import { getTrivia } from '../../apiCalls/apiCalls.js';


export class App extends Component{
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
    getTrivia(team, level)
      .then(trivia => {
        this.setState({ trivia })
        this.props.loadTriviaToStore( trivia.results )
      })
  }
  addUser = (user) => {
    this.setState({ user })
    this.setState({ chosen: user.team })
    this.props.loadUserToStore( user )
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
              {this.props.trivia.trivia.length && <section><Nav resetWindow={this.resetWindow}/><TestContainer trivia={this.props.trivia} /></section>}
            </section>
          )}} />
        <Route exact path='/account' render={() => {
          return (
            <section className='account-page'>
              <Nav />
              <Account />
            </section>
          )}} />
        <Route exact path='/results' render={() => {
          return (
            <section id='all-results'>
              <Nav />
              <Results />
              <Nerds />
            </section>
          )}} />
        <BadPathPage />
      </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  loadTriviaToStore: (trivia) => { dispatch(addTrivia(trivia)) },
  loadUserToStore: (user) => { dispatch(addUser(user)) }
})

export const mapStateToProps = state => ({
  trivia: state
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
