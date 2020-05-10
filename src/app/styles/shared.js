import styled from "styled-components";
import colours from "./colours";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${colours.blue};
  cursor: pointer;
  &:hover {
    color: ${colours.pink};
  }
`;

export const Button = styled.button`
  width: ${(props) => props.wide && "100%"};
  padding: 0.5em 3em;
  margin-bottom: 1em;
  cursor: pointer;
  border: none;
  border-radius: 0.5em;
  background: ${colours.seafoam};
  &:hover {
    background: ${colours.seafoamLight};
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 0.25em 0 0.75em 0;
`;

export const WarningMessage = styled.span`
  font-weight: bold;
  color: ${colours.pink};
  margin: 0.25em 0 0.75em 0;
`;

export const Form = styled.form`
  width: 50%;
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 0.5em;
  display: block;
  padding: 0.5em;
  margin: 0.5em 0;
  &:hover {
    background: ${colours.lightGrey};
  }
`;
