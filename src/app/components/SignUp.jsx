import React from "react";
import { Button, Title, LoginContainer, FormInput } from "../styles/shared.js";

export const SignUp = ({ createUser }) => {
  return (
    <LoginContainer>
      <Title>Create an Account</Title>

      <form onSubmit={createUser}>
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
      </form>
    </LoginContainer>
  );
};
