import React, { Fragment } from "react";

import { StyledLink, Pop } from "../styles/shared.js";

export const Username = ({ username }) => {
  return (
    <Fragment>
      <StyledLink to='/dashboard'>Dashboard</StyledLink>
      <span>
        Welcome, <Pop>{username}</Pop>!
      </span>
    </Fragment>
  );
};
