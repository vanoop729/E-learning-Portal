import React from "react";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

// Description part of Home page
export function HomeDescription() {
  return (
    <div className="left-side">
      {/* Leave this Link tag as it is for testing purpose */}
      <Link to="/subject"> Go to Subject Page</Link>

      <h3>Description</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam
        tempore quam dignissimos consequatur quis molestiae cumque, magni nemo
        odit cum quas optio? Quam vero suscipit non libero ad neque aliquid
        temporibus assumenda nisi, dolor harum excepturi consequuntur
        accusantium quisquam repudiandae deleniti at ut facilis ea eius quidem
        ipsam alias!
      </p>
    </div>
  );
}

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/subject");
  }

  return (
    <div className="right-side">
      <Form className="my-login-form" onSubmit={handleSubmit}>
        <h4>User Login</h4>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="my-login-button"
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
        * Give random email and password to login *
      </Form>
    </div>
  );
}

export default Home;
