import React from "react";
import styled from "styled-components";
import colours from "../styles/colours.js";

import { StyledLink } from "../styles/shared.js";
import { ConnectedUsername } from "../containers/ConnectedUsername";

const Nav = styled.nav`
  grid-column: span 12;
  padding: 1em;
  border-bottom: 2px solid ${colours.pink};
  display: flex;
  justify-content: space-around;
`;

export const Navigation = ({ authenticated }) => (
  <Nav>
    {authenticated === "AUTHENTICATED" ? (
      <ConnectedUsername />
    ) : (
      <span>
        You must <StyledLink to='/dashboard'>log-in</StyledLink> to use this site.
      </span>
    )}
  </Nav>
);
