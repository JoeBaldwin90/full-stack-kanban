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

const FormGrid = styled.div`
  grid-column: 2 / span 10;
  border: solid 2px ${colours.navy};
  padding: 1em;
  border-radius: 1em;
`;

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
