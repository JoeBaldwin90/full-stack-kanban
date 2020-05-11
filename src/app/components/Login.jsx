import React from "react";
import * as mutations from "../store/mutations";
import {
  Button,
  Title,
  WarningMessage,
  Form,
  FormInput,
  StyledLink,
  FormGrid
} from "../styles/shared.js";

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
