import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SingleInput = ({ fullName, handleInput }) => (
  <Form.Group>
    <Form.Label className="font-weight-bold">Full name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Type first and last name here"
      name="fullName"
      value={fullName}
      onChange={handleInput}
    ></Form.Control>
  </Form.Group>
);

SingleInput.propTypes = {
  fullName: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default SingleInput;
