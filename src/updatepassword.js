import React from "react";
import { Form, Button } from 'react-bootstrap';

const UpdatePassword = () => {
  return (
    <>
        <h1>Сменить пароль</h1>
        <Form className="passwordForm">
            <Form.Group className="mb-3" controlId="formBasicOldPassword">
                <Form.Label>Текущий пароль</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNewPassword">
                <Form.Label>Новый пароль</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRepeatNewPassword">
                <Form.Label>Повторите пароль</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Сменить пароль
            </Button>
            </Form>
    </>
  );
};

export default UpdatePassword;
