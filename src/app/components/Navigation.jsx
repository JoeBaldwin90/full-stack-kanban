import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ConnectedUsername } from './Username';

export const Navigation = () => (
  <Fragment>
    <Link to='/dashboard'>
      <p>Dashboard</p>
    </Link>
    <ConnectedUsername />
  </Fragment>
);

export const ConnectedNavigation = connect((state) => state)(Navigation);
