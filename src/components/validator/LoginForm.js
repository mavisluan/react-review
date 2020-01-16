/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  Container,
  Form,
  FormControl,
  Button,
  FormLabel,
  FormGroup,
  FormText,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoginForm = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    nameError: '',
    passwordError: '',
  });

  const { name, password } = user;
  const { nameError, passwordError } = errors;

  const handleInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const { name, password } = user;
    const errors = { nameError: '', passwordError: '' };
    let isError = false;

    if (name.length < 3) {
      isError = true;
      errors.nameError = 'Username needs to be at least 3 characters long';
    }

    if (password.length < 8) {
      isError = true;
      errors.passwordError = 'Password needs to be at least 8 characters long';
    }

    setErrors(errors);

    return isError;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log('not valid');
    } else {
      console.log('valid');
      setErrors({ nameError: '', passwordError: '' });
      setUser({ name: '', password: '' });
      // submit to the server
    }
  };

  return (
    <Container className="mt-5 col-6">
      <Form>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            placeholder="User Name"
          />
          <FormText className="text-danger">{nameError}</FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
            placeholder="Password"
          />
          <FormText className="text-danger">{passwordError}</FormText>
        </FormGroup>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
