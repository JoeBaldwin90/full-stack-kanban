import React, { Fragment } from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import * as mutations from "../store/mutations";
import {
  Button,
  Title,
  WarningMessage,
  Form,
  FormInput,
  StyledLink,
} from "../styles/shared.js";

const FormGrid = styled.div`
  grid-column: 2 / span 10;
  border: solid 2px ${colours.navy};
  padding: 1em;
  border-radius: 1em;
`;

export const Login = ({ authenticateUser, authenticated }) => {
  return (
    <FormGrid>
      <Title>Please Log In</Title>

      <Form onSubmit={authenticateUser}>
        <FormInput
          type='text'
          placeholder='Username'
          name='username'
          defaultValue='Dev'
        />
        <FormInput
          type='password'
          placeholder='Password'
          name='password'
          defaultValue=''
        />
        <Button wide type='submit'>
          Log-in
        </Button>
      </Form>

      {authenticated === mutations.NOT_AUTHENTICATED ? (
        <WarningMessage>* Incorrect logins</WarningMessage>
      ) : null}

      <p>
        <span>No account?</span> <StyledLink to='/sign-up'>Sign up!</StyledLink>
      </p>
    </FormGrid>
  );
};
