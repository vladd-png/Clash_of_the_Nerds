import React from 'react';
import './Account.scss';
import { connect } from 'react-redux';
import AccountResults from '../AccountResults/AccountResults'


export const Account = (props) => {

  const triviaCards = props.saveTrivia.map(trivia => <AccountResults key={Math.random()} result={trivia}/>)
  return (
    <section className='account-page'>
      <h1 className='account-name'>{props.user[0].name}'s Account Page</h1>
      <div>{triviaCards}</div>
    </section>
  )
}

export const mapStateToProps = state => ({
  user: state.user,
  saveTrivia: state.saveTrivia
});

export default connect(mapStateToProps)(Account)
