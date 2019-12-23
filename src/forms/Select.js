import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Select = ({ handleInput, options }) => (
  <Form.Group className="d-inline-flex">
    <Form.Control as="select" name="ageRange" onChange={handleInput}>
      <option>Choose your age range</option>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </Form.Control>
  </Form.Group>
);

Select.propTypes = {
  handleInput: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
