import React, { Fragment } from "react";
import { connect } from "react-redux";

export const Login = () => {
  return (
    <Fragment>
      <h2>Please Log In</h2>
      <form>
        <input type="text" placeholder="Username" name="username" defaultValue="Dev"></input>
        <input type="text" placeholder="Password" name="password" defaultValue=""></input>
        <button type="submit">Log-in</button>
      </form>
    </Fragment>
  )
};

const mapStateToProps = state => state;

export const ConnectedLogin = connect(mapStateToProps)(Login);
