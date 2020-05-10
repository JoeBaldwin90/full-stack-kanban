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
} from "../styles/shared.js";

const LoginGrid = styled.div`
  grid-column: 2 / span 10;
  border: solid 2px ${colours.navy};
  padding: 1em;
  border-radius: 1em;
`;

const ExposeSignUp = styled.span`
  text-decoration: underline;
  color: ${colours.blue};
  cursor: pointer;
  &:hover {
    color: ${colours.pink};
  }
`;

export const Login = ({
  authenticateUser,
  authenticated,
  createUser,
  requestSignUp,
  noAccount,
}) => {
  return (
    <LoginGrid>
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

      {noAccount ? (
        <Fragment />
      ) : (
        <p>
          <span>No account?</span>{" "}
          <ExposeSignUp onClick={requestSignUp}>
            Sign up!
          </ExposeSignUp>
        </p>
      )}

      {!noAccount ? (
        <Fragment />
      ) : (
        <Form onSubmit={createUser}>
          <FormInput
            type='text'
            placeholder='Create username'
            name='username'
            defaultValue=''
          ></FormInput>
          <FormInput
            type='password'
            placeholder='Create password'
            name='password'
            defaultValue=''
          ></FormInput>
          <Button wide type='submit'>
            Sign-Up!
          </Button>
        </Form>
      )}
    </LoginGrid>
  );
};
