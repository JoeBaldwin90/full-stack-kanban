import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as mutations from '../store/mutations';

export const Login = ({ authenticateUser, authenticated }) => {
  return (
    <Fragment>
      <h2>Please Log In</h2>
      <form onSubmit={authenticateUser}>
        <input type="text" placeholder="Username" name="username" defaultValue="Dev"></input>
        <input type="text" placeholder="Password" name="password" defaultValue=""></input>
        {authenticated === mutations.NOT_AUTHENTICATED ? <p>Incorrect logins</p> : null}
        <button type="submit">Log-in</button>
      </form>
    </Fragment>
  )
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated
});

const mapDispatchToProps = dispatch => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target['username'].value;
    let password = e.target['password'].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  }
});

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
