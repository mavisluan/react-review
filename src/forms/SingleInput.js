import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SingleInput = ({ title, type, handleInput, setName, setValue, min }) => (
  <Form.Group>
    <Form.Label className="font-weight-bold">{title}</Form.Label>
    <Form.Control
      type={type}
      placeholder="Type first and last name here"
      name={setName}
      value={setValue}
      onChange={handleInput}
      min={min}
    ></Form.Control>
  </Form.Group>
);

SingleInput.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setName: PropTypes.string.isRequired,
  setValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired, // type: text --> string, type: number --> number
  handleInput: PropTypes.func.isRequired,
  min: PropTypes.number,
};

export default SingleInput;
