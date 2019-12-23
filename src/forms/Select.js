import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Select = ({ handleInput }) => (
  <Form.Group className="d-inline-flex">
    <Form.Control as="select" name="ageRange" onChange={handleInput}>
      <option>Choose your age range</option>
      <option value="18-25">18-25</option>
      <option value="26-59">26-59</option>
      <option value="60 or older">60 or older</option>
    </Form.Control>
  </Form.Group>
);

Select.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default Select;
