import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import SingleInput from './SingleInput';
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup';
import Select from './Select';

// const sizeOptions = ['small', 'medium', 'large'];
const OrderPizza = () => {
  const [pizza, setPizza] = useState({
    userName: '',
    sizeOptions: [],
    selectedSize: [],
    toppingOptions: [],
    selectedTopping: '',
    glutenFree: false,
    notes: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('./pizza-static-data.json'); // static data is in pubic folder
        setPizza(data);
        console.log('data', data);
      } catch (e) {
        console.log('err', e);
      }
    };
    fetchData();
  }, []);

  // const initialState = {
  //   userName: '',
  //   size: ['large'],
  //   topping: 'Pepperoni',
  //   glutenFree: false,
  //   notes: 'extra crispy',
  // };
  // const [pizza, setPizza] = useState(initialState);
  const handleInput = e => {
    const { name, value } = e.target;
    setPizza({
      ...pizza,
      [name]: value,
    });
  };

  const {
    userName,
    sizeOptions,
    selectedSize,
    toppingOptions,
    selectedTopping,
    glutenFree,
    notes,
  } = pizza;

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
        selectedOptions={selectedSize}
        setName="selectedSize"
        controlFunction={sizeSelection}
      />
    </Container>
  );
};

export default OrderPizza;
