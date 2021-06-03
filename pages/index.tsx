import React from 'react';
import Container from '@material-ui/core/Container';
import { BusinessSignUpForm } from '../src/BusinessSignUpForm';

export default function Index() {
  return (
    <Container maxWidth="md">
      Home
      <BusinessSignUpForm />
    </Container>
  );
}