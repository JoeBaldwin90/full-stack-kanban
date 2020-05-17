import React from "react";
import * as mutations from "../store/mutations";
import {
  Button,
  Title,
  WarningMessage,
  FormInput,
  StyledLink,
  LoginContainer,
} from "../styles/shared.js";

export const Login = ({ authenticateUser, authenticated }) => {
  return (
    <LoginContainer>
      <Title>Please Log In</Title>

      <form onSubmit={authenticateUser}>
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
      </form>

      {authenticated === mutations.NOT_AUTHENTICATED ? (
        <WarningMessage>* Incorrect logins</WarningMessage>
      ) : null}

      <p style={{paddingTop: "1em"}}>
        <span>No account?</span> <StyledLink to='/sign-up'>Sign up!</StyledLink>
      </p>
    </LoginContainer>
  );
};
