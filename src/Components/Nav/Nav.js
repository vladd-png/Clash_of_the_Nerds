import React from 'react';
import './Nav.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import small from '../../assets/logo-small.png';
import { resetAnswers } from '../../actions';



export const Nav = (props) => {
  const updateStoreAnswers = () => {
    props.loadIncorrectGuessToStore()
  }

  return (
    <section className='nav-bar'>
      <h1 className='user-name-nav'>Welcome {props.user[0].name}</h1>
      <img src={ small } className='small-title-logo' alt='clash of the nerds logo but small' />
      <Link to='/'><button type='button' className='home-btn' onClick={updateStoreAnswers}>Quit</button></Link>
    </section>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  loadIncorrectGuessToStore: () => { dispatch(resetAnswers()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
