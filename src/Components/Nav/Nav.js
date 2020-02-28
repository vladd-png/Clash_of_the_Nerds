import React from 'react';
import './Nav.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import small from '../../assets/logo-small.png';


const Nav = (props) => {
  console.log(props.user[0].name);
  return (
    <section className='nav-bar'>
      <h1 className='user-name-nav'>Welcome {props.user[0].name}</h1>
      <img src={ small } className='small-title-logo' alt='clash of the nerds logo but small' />
      <Link to='/'><button type='button' className='home-btn'>Quit</button></Link>
    </section>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Nav)
