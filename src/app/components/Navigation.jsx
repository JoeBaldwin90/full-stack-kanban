import React from "react";
import { ConnectedUsername } from "../containers/ConnectedUsername";
import { StyledLink, StyledNav } from "../styles/shared.js";

export const Navigation = ({ authenticated }) => (
  <StyledNav>
    {authenticated === "AUTHENTICATED" ? (
      <ConnectedUsername />
    ) : (
      <span>
        You must <StyledLink to='/dashboard'>log-in</StyledLink> to use this site.
      </span>
    )}
  </StyledNav>
);
