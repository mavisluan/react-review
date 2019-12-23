/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
  Container,
  Form,
  Button,
  Card,
  ListGroup,
  Row,
  Col,
  ListGroupItem,
} from 'react-bootstrap';
import SingleInput from './SingleInput';
import Select from './Select';
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup';
import TextArea from './TextArea';

const petOptions = [
  'dog',
  'cat',
  'rabbit',
  'iguana',
  'pony',
  'ferret',
  'fish',
  'bird',
];

const siblingsOptions = ['Yes', 'No'];
const ageOptions = ['18-25', '26-59', '60 or older'];

const PetAdoption = () => {
  const initialState = {
    fullName: '',
    ageRange: '',
    adoptPets: ['dog', 'cat', 'ferret'],
    adoptSiblings: ['Yes'],
    currPetCount: 0,
    currPetInfo: '',
  };
  const [adoptInfo, setAdoptInfo] = useState(initialState);
  const {
    fullName,
    ageRange,
    adoptPets,
    adoptSiblings,
    currPetCount,
    currPetInfo,
  } = adoptInfo;

  // input value type is String
  const handleInput = e => {
    const { value, name } = e.target;

    console.log(`value: ${value}, name: ${name}`);
    console.log('typeof value', typeof value); // string
    setAdoptInfo({ ...adoptInfo, [name]: value });
  };

  const handlePetSelection = ({ selected, item, setName }) => {
    if (!selected.includes(item)) {
      console.log(`Item not selected`, item); // if pet not exists in selection, add it
      setAdoptInfo({
        ...adoptInfo,
        [setName]: [...selected, item],
      });
    } else {
      console.log(`Item selected`, item); // if pet exists in selection, remove it
      setAdoptInfo({
        ...adoptInfo,
        [setName]: selected.filter(s => s !== item),
      });
    }
  };

  const handleSiblingsSelection = ({ selected, item, setName }) => {
    if (!selected.includes(item)) {
      setAdoptInfo({
        ...adoptInfo,
        [setName]: [item],
      });
    }
  };

  // handle reset
  const handleReset = () =>
    setAdoptInfo({
      fullName: '',
      ageRange: '',
      adoptPets: [],
      adoptSiblings: [],
      currPetCount: 0,
      currPetInfo: '',
    });

  const handleSubmit = e => {
    e.preventDefault();
    const {
      fullName,
      ageRange,
      adoptPets,
      adoptSiblings,
      currPetCount,
      currPetInfo,
    } = adoptInfo;

    const postData = {
      fullName,
      ageRange,
      adoptPets,
      adoptSiblings,
      currPetCount,
      currPetInfo,
    };

    console.log('Send data in a POST request', postData);
    handleReset();
  };

  return (
    <Container className="shadow border-darken-4">
      <h3 className="py-3">Pet Adoption Form</h3>
      <Form>
        <SingleInput
          title="Full Name"
          type="text"
          setName="fullName"
          setValue={fullName}
          handleInput={handleInput}
        />
        <Select handleInput={handleInput} options={ageOptions} />
        <CheckboxOrRadioGroup
          title="Which kinds of pets would you like to adopt?"
          setName="adoptPets"
          options={petOptions}
          selected={adoptPets}
          type="checkbox"
          controlFunction={handlePetSelection}
        />
        <CheckboxOrRadioGroup
          title="Are you willing to adopt more than one pet if we have siblings for
          adoption?"
          setName="adoptSiblings"
          options={siblingsOptions}
          selected={adoptSiblings}
          type="radio"
          controlFunction={handleSiblingsSelection}
        />
        <SingleInput
          title="How many pets do you currently own?"
          type="number"
          setName="currPetCount"
          setValue={currPetCount}
          min={0}
          handleInput={handleInput}
        />
        <TextArea
          title="If you currenlty own pets, please write their names, breeds, and an
        outline of their personalities."
          type="textarea"
          setName="currPetInfo"
          setValue={currPetInfo}
          placeholder="Please be thorough in your descriptions"
          handleInput={handleInput}
        />
        <div className="d-flex justify-content-between">
          <Button variant="link" type="button" onClick={handleReset}>
            Clear Form
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Input confirmation</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            FullName: <span className="text-primary"> {fullName}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            AgeRange: <span className="text-warning"> {ageRange}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            Pet Types:
            {adoptPets.map((pet, index) => (
              <span key={index} className="text-primary ml-2">
                {index === adoptPets.length - 1 ? pet : `${pet},`}
              </span>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            Adopt siblings:
            <span className="text-warning"> {adoptSiblings[0]}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            currPetCount:<span className="text-primary"> {currPetCount}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            Description: <span className="text-warning"> {currPetInfo}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default PetAdoption;
