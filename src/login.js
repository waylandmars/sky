import React from "react";
import './index.css';

import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Login = () => {
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
      Войти
    </Button>
  </Form>
  <Link to="/signup" className="primaryLink" tabIndex="0">Регистрация</Link>
  </div>
  </div>
  </>
  );
};

export default Login;
