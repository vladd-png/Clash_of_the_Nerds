import React from 'react';
import './Account.scss';
import { connect } from 'react-redux';


export const Account = (props) => {
  return (
    <section className='account-page'>
      <h1 className='account-name'>{props.user[0].name}'s Account Page</h1>
    </section>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Account)
