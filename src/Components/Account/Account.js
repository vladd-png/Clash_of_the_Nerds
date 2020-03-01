import React from 'react';
import './Account.scss';

const Account = () => {
  return (
    null
  )
}

export default Account;

export const mapStateToProps = state => ({
  user: state.user,
  savedTrivia: state.savedTrivia
});
