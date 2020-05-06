import React, { Fragment } from "react";

export const Username = ({ username }) => {
  return (
    <Fragment>
      {username ? <h5>Welcome, {username}!</h5> : undefined}
    </Fragment>
  )
};
