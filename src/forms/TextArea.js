import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const TextArea = ({
  title,
  type,
  setName,
  setValue,
  placeholder,
  handleInput,
}) => (
  <Form.Group>
    <Form.Label>{title}</Form.Label>
    <Form.Control
      as={type}
      rows="3"
      placeholder={placeholder}
      name={setName}
      value={setValue}
      onChange={handleInput}
    ></Form.Control>
  </Form.Group>
);

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setName: PropTypes.string.isRequired,
  setValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
