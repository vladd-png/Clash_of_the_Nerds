import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      team: 'mythology'
    }
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }
  render() {
    return(
      <form>
        <input placeholder='name' type='text' value={this.state.name} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default Login
