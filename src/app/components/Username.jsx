import React from "react";
import styled from "styled-components";
import colours from "../styles/colours.js";

const Greeting = styled.span`
  color: ${colours.navy};
`;

export const Username = ({ username }) => {
  return (
    <Greeting>Welcome, {username}!</Greeting>
  );
};
