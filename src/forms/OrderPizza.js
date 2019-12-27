import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import SingleInput from './SingleInput';
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup';
import Select from './Select';
import TextArea from './TextArea';

// const sizeOptions = ['small', 'medium', 'large'];
const OrderPizza = () => {
  const initialState = {
    userName: '',
    sizeOptions: [],
    selectedSize: [],
    toppingOptions: [],
    selectedTopping: '',
    glutenOptions: [],
    selectedGluten: [],
    notes: '',
  };
  const [pizza, setPizza] = useState(initialState);

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
    glutenOptions,
    selectedGluten,
    notes,
  } = pizza;

  const handleSingleSelection = ({ selectedOptions, item, setName }) => {
    if (!selectedOptions.includes(item))
      setPizza({ ...pizza, [setName]: [item] });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('submitted data', pizza);
    setPizza({
      ...pizza,
      userName: '',
      selectedSize: [],
      selectedTopping: '',
      selectedGluten: [],
      notes: '',
    });
  };
  return (
    <Container className="border border-darken-3 shadow-lg p-5">
      {console.log('pizza', pizza)}
      <h3 className="py-3">Order Your Pizza</h3>
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
        controlFunction={handleSingleSelection}
      />
      <Select
        options={toppingOptions}
        setName="selectedTopping"
        selectedOption={selectedTopping}
        handleInput={handleInput}
        placeholder="Choose Topping"
        title="Topping"
      />
      <CheckboxOrRadioGroup
        options={glutenOptions}
        setName="selectedGluten"
        title="Gluten free"
        type="checkbox"
        selectedOptions={selectedGluten}
        controlFunction={handleSingleSelection}
      />
      <TextArea
        title="special instructions"
        placeholder="Extra crispy"
        setName="notes"
        setValue={notes}
        type="textarea"
        handleInput={handleInput}
      />
      <Button variant="primary" onClick={handleSubmit}>
        Sumbit
      </Button>
    </Container>
  );
};

export default OrderPizza;
