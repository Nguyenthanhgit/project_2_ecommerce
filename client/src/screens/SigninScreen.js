import React from "react";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import { Button } from "react-bootstrap/Button";

function SignInScreen() {
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
      </Form>
    </Container>
  );
}

export default SignInScreen;
