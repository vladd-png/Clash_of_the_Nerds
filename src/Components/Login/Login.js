import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import logo from '../../assets/logo.png';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      team: '20',
      level: 'easy'
    }
  }
  componentDidMount = () => {
    this.setState({ name: '', team: '20', level: 'easy' })
    this.props.addUser({ name: this.state.name, team: this.state.team, level: this.state.level })
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
        <img src={ logo } className='title-logo' alt='clash of the nerds logo' />
        <input className='user-name' placeholder='name' type='text' value={this.state.name} onChange={this.handleChange} maxLength='25'/>
        <h3>Choose Your Battle</h3>
        <select className='form-choice' onChange={(event) => this.setState({team: event.target.value})}>
          <option value='20'>Mythology</option>
          <option value='17'>Science & Nature</option>
          <option value='9'>General Knowledge</option>
          <option value='27'>Animals</option>
          <option value='19'>Mathematics</option>
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
