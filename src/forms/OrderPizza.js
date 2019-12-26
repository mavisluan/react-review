import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleInput from './SingleInput';
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup';
import Select from './Select';

const sizeOptions = ['small', 'medium', 'large'];
const OrderPizza = () => {
  const initialState = {
    userName: '',
    size: ['large'],
    topping: 'Pepperoni',
    glutenFree: false,
    notes: 'extra crispy',
  };
  const [pizza, setPizza] = useState(initialState);
  const handleInput = e => {
    const { name, value } = e.target;
    setPizza({
      ...pizza,
      [name]: value,
    });
  };

  const { userName, size, topping, glutenFree, notes } = pizza;

  const sizeSelection = ({ selectedOptions, item, setName }) => {
    if (!selectedOptions.includes(item))
      setPizza({ ...pizza, [setName]: [item] });
  };
  return (
    <Container className="border border-darken-3 shadow-lg p-5">
      {console.log('pizza', pizza)}
      <SingleInput
        title="Full Name"
        type="text"
        placeholder="Please enter your first name and last name"
        handleInput={handleInput}
        setName="userName"
        setValue={userName}
      />
      <CheckboxOrRadioGroup
        options={sizeOptions}
        title="size"
        type="radio"
        selectedOptions={size}
        setName="size"
        controlFunction={sizeSelection}
      />
    </Container>
  );
};

export default OrderPizza;
