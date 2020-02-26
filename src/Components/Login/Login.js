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
  updateChoice = (e) => {
    e.target.classList.add('active')
  }
  submitInfo = (props) => {
    this.props.addUser({ name: this.state.name, team: this.state.team })
    this.setState({ name: '' })
  }
  render() {
    return(
      <form className='login-form'>
        <h1 className='title-logo'>Clash of the Nerds</h1>
        <input className='user-name' placeholder='name' type='text' value={this.state.name} onChange={this.handleChange} maxlength='25'/>
        <h3>Choose Your Team</h3>
        <select className='form-choice' >
          <option value='mythology' onClick={this.updateChoice}>Mythology</option>
          <option value='science' onClick={this.updateChoice}>Science & Nature</option>
          <option value='art' onClick={this.updateChoice}>Art</option>
        </select>
        <button type='button' className='submit-btn' onClick={this.submitInfo}>Ready to Rumble</button>
      </form>
    )
  }
}

export default Login
