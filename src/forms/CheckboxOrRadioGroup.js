import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const CheckboxOrRadioGroup = ({
  title,
  options,
  type,
  selectedOptions,
  controlFunction,
  setName,
}) => (
  <Form.Group>
    <Form.Label className="font-weight-bold">{title}</Form.Label>
    <div>
      {options.map((item, index) => (
        <Form.Check
          key={index}
          type={type}
          label={item}
          name={item}
          value={item}
          checked={selectedOptions.includes(item)}
          onChange={() => controlFunction({ selectedOptions, item, setName })}
          className="d-inline-flex col-6 text-capitalize"
        ></Form.Check>
      ))}
    </div>
  </Form.Group>
);

CheckboxOrRadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  setName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  controlFunction: PropTypes.func.isRequired,
};

export default CheckboxOrRadioGroup;
