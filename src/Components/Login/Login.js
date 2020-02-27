import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      team: '20',
      level: 'easy'
    }
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }
  submitInfo = () => {
    this.props.addUser({ name: this.state.name, team: this.state.team, level: this.state.level })
    this.props.fetchData( this.state.team, this.state.level )
    this.setState({ name: '' })
  }
  render() {
    return(
      <form className='login-form'>
        <h1 className='title-logo'>Clash of the Nerds</h1>
        <input className='user-name' placeholder='name' type='text' value={this.state.name} onChange={this.handleChange} maxLength='25'/>
        <h3>Choose Your Team</h3>
        <select className='form-choice' onChange={(event) => this.setState({team: event.target.value})}>
          <option value='20'>Mythology</option>
          <option value='17'>Science & Nature</option>
          <option value='25'>Art</option>
        </select>
        <select className='form-choice' onChange={(event) => this.setState({level: event.target.value})}>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
        <Link to={`/test`}><button type='button' className='submit-btn' onClick={this.submitInfo}>Ready to Rumble</button></Link>
      </form>
    )
  }
}

export default Login
