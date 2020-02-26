import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Nerds from '../Nerds/Nerds';

class App extends Component{
  constructor() {
    super()
    this.state = {
      user: {
        name: '',
        team: ''
      },
      trivia: []
    }
  }
  addUser = (user) => {
    this.setState({ user })
  }
  render() {

    return (
      <div className='App'>
      <Login addUser={this.addUser}/>
      <Nerds />
      </div>
    );
  }
}

export default App;
