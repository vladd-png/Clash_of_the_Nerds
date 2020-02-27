import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Nerds from '../Nerds/Nerds';
import LoadingPage from '../LoadingPage/LoadingPage';
import TestContainer from '../TestContainer/TestContainer';
import { Route, Switch } from 'react-router-dom';

class App extends Component{
  constructor() {
    super()
    this.state = {
      user: {
        name: '',
        team: ''
      },
      chosen: ''
    }
  }
  componentDidMount = () => {
    fetch('https://opentdb.com/api.php?amount=10&category=17')
    .then(response => response.json())
    .then(science => {
      this.setState({ science })
    })
    fetch('https://opentdb.com/api.php?amount=10&category=20')
      .then(response => response.json())
      .then(mythology => {
        this.setState({ mythology })
      })
    fetch('https://opentdb.com/api.php?amount=10&category=25')
      .then(response => response.json())
      .then(art => {
        this.setState({ art })
      })
  }
  addUser = (user) => {
    this.setState({ user })
    this.setState({ chosen: this.state[user.team] })
  }
  render() {

    return (
      <div className='App'>
      <Switch>
        <section>
          <Route exact path='/' render={() => <Login addUser={this.addUser}/>} />
          <Route exact path='/' component={Nerds} />
        </section>
        <Route exact path='/test' render={() => {
          return (
            <section>
              {!this.props.trivia.length && <LoadingPage />}
              {this.props.trivia.length && <TestContainer allQuestions={this.props.trivia} />}
            </section>
          )}} />
      </Switch>
      </div>
    );
  }
}

export default App;
