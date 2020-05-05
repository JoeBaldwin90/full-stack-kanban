import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ConnectedUsername } from './Username';

export const Navigation = ({ authenticated }) => (
  <Fragment>
    {authenticated === 'AUTHENTICATED'
      ? <ConnectedUsername />
      : <Link to='/dashboard'>
          <p>Dashboard</p>
        </Link>
    }
  </Fragment>
);

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated
});

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);
