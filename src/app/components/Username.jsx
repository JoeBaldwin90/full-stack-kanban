import React, { Fragment } from "react";
import { connect } from "react-redux";

export const Username = ({ username }) => {
  return (
    <Fragment>
      { username !== undefined ? <h5>Welcome, {username}!</h5> : undefined }
    </Fragment>
  )
};

const mapStateToProps = ({ session }) => ({
  username: session.username
});

export const ConnectedUsername = connect(mapStateToProps)(Username);
