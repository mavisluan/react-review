import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Select = ({ handleInput, options, selectedOption, placeholder }) => (
  <Form.Group className="d-inline-flex">
    <Form.Control
      as="select"
      name="ageRange"
      value={selectedOption}
      onChange={handleInput}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
);

Select.propTypes = {
  handleInput: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Select;
