import React, { Fragment } from "react";
import styled, { css } from "styled-components";

const Greeting = styled.p`
  font-family: "IBM Plex Mono", monospace;
  background: transparent;
  border-radius: 3px;
  border: 2px solid seagreen;
  color: seagreen;
  padding: 0.25em 1em;
`;

export const Username = ({ username }) => {
  return (
    <Fragment>
      {username && <Greeting>Welcome, {username}!</Greeting>}
    </Fragment>
  );
};
