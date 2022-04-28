import React from "react";

import { Form, Button } from 'react-bootstrap';
import logo from './logo.svg';

const Signup = () => {
  return (
    <>
    <img src={logo} className="app-logo" alt="logo" />
    <div className="row">
      <div className="loginContainer">
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Пароль</Form.Label>
      <Form.Control type="password" placeholder="" />
    </Form.Group>
    <Button сlassName="primaryButton mx-auto" type="submit">
      Регистрация
    </Button>
  </Form>
  </div>
  </div>
  </>
  );
};

export default Signup;
