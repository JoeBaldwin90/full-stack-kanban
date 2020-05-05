import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as mutations from '../store/mutations';

export const Login = ({ authenticateUser, authenticated, createUser, requestSignUp, noAccount }) => {
  return (
    <Fragment>
      <h2>Please Log In</h2>
      <form onSubmit={authenticateUser}>
        <input type="text" placeholder="Username" name="username" defaultValue="Dev"></input>
        <input type="password" placeholder="Password" name="password" defaultValue=""></input>
        {authenticated === mutations.NOT_AUTHENTICATED ? <p>Incorrect logins</p> : null}
        <button type="submit">Log-in</button>
      </form>
      {noAccount
        ? <Fragment />
        : (<Fragment>
          <p>No account? <span><button onClick={requestSignUp}>Sign up!</button></span></p>
        </Fragment>)}
      {!noAccount
        ? <Fragment />
        : <form onSubmit={createUser}>
          <input type="text" placeholder="Create username" name="username" defaultValue=""></input>
          <input type="password" placeholder="Create password" name="password" defaultValue=""></input>
          <button type="submit">Sign-Up!</button>
        </form>
      }
    </Fragment>
  )
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
  noAccount: session.noAccount
});

const mapDispatchToProps = dispatch => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target['username'].value;
    let password = e.target['password'].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  },
  requestSignUp() {
    dispatch(mutations.requestSignUp(true));
  },
  createUser(e) {
    e.preventDefault();
    let username = e.target['username'].value;
    let password = e.target['password'].value;
    dispatch(mutations.createUser(username, password));
  }
});

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
