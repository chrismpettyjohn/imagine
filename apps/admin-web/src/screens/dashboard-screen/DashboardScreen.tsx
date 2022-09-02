import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

export function DashboardScreen() {
  return (
    <Container>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </Jumbotron>
    </Container>
  )
}
