import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ConnectedUsername } from '../containers/ConnectedUsername';

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
