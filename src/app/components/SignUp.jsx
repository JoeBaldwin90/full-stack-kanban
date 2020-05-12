import React from "react";
import {
  Button,
  Title,
  FormGrid,
  Form,
  FormInput,
} from "../styles/shared.js";

export const SignUp = ({
  createUser
}) => {
  return (
    <FormGrid>
      <Title>Create an Account</Title>

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
    </FormGrid>
  );
};
