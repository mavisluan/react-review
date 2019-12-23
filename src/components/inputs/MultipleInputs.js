/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const petTypes = [
  'dog',
  'cat',
  'rabbit',
  'iguana',
  'pony',
  'ferret',
  'fish',
  'bird',
];

const MultipleInputs = () => {
  const initialState = {
    fullName: '',
    ageRange: '',
    adoptType: ['dog', 'cat', 'ferret'],
    adoptSiblings: true,
    currPetCount: 0,
    currPetInfo: '',
  };
  const [adoptInfo, setAdoptInfo] = useState(initialState);
  const {
    fullName,
    ageRange,
    adoptType,
    adoptSiblings,
    currPetCount,
    currPetInfo,
  } = adoptInfo;

  // input value type is String
  const handleInput = e => {
    let { value, name } = e.target;
    // convert input from string to Boolean
    if (name === 'adoptSiblings') {
      value = value === 'true';
    }

    console.log(`value: ${value}, name: ${name}`);
    console.log('typeof value', typeof value); // string
    setAdoptInfo({ ...adoptInfo, [name]: value });
  };

  // handle checkbox
  const handleCheckbox = pet => {
    if (!adoptType.includes(pet)) {
      console.log(`pet not selected`, pet); // if pet not exists in selection, add it
      setAdoptInfo({
        ...adoptInfo,
        adoptType: [...adoptType, pet],
      });
    } else {
      console.log(`pet selected`, pet); // if pet exists in selection, remove it
      setAdoptInfo({
        ...adoptInfo,
        adoptType: adoptType.filter(type => type !== pet),
      });
    }
  };

  // handle reset
  const handleReset = () =>
    setAdoptInfo({
      fullName: '',
      ageRange: '',
      adoptType: [],
      adoptSiblings: null,
      currPetCount: 0,
      currPetInfo: '',
    });

  const handleSubmit = e => {
    e.preventDefault();
    const {
      fullName,
      ageRange,
      adoptType,
      adoptSiblings,
      currPetCount,
      currPetInfo,
    } = adoptInfo;

    const postData = {
      fullName,
      ageRange,
      adoptType,
      adoptSiblings,
      currPetCount,
      currPetInfo,
    };

    console.log('Send data in a POST request', postData);
    handleReset();
  };
  return (
    <Container className="border border-secondary shadow">
      <h3 className="py-3">Pet Adoption Form</h3>
      <Form>
        <Form.Group>
          <Form.Label className="font-weight-bold">Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type first and last name here"
            name="fullName"
            value={fullName}
            onChange={handleInput}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="d-inline-flex">
          <Form.Control as="select" name="ageRange" onChange={handleInput}>
            <option>Choose your age range</option>
            <option value="18-25">18-25</option>
            <option value="26-59">26-59</option>
            <option value="60 or older">60 or older</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Which kinds of pets would you like to adopt?</Form.Label>
          {petTypes.map((pet, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={pet}
              name={pet}
              value={pet}
              checked={adoptType.includes(pet)}
              onChange={() => handleCheckbox(pet)}
              className="col-6"
            ></Form.Check>
          ))}
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Are you willing to adopt more than one pet if we have siblings for
            adoption?
          </Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Yes"
              name="adoptSiblings"
              value
              checked={adoptSiblings === true}
              onChange={handleInput}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="No"
              checked={adoptSiblings === false}
              name="adoptSiblings"
              value={false}
              onChange={handleInput}
              className="offset-6"
            ></Form.Check>
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>How many pets do you currently own?</Form.Label>
          <Form.Control
            type="number"
            name="currPetCount"
            min={0}
            max={100}
            value={currPetCount}
            onChange={handleInput}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            If you currenlty own pets, please write their names, breeds, and an
            outline of their personalities.
          </Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Please be thorough in your descriptions"
            name="currPetInfo"
            value={currPetInfo}
            onChange={handleInput}
          ></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button variant="link" type="button" onClick={handleReset}>
            Clear Form
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
      <div className="mt-3">
        <h3>Form input info</h3>
        <p>
          fullName: <span className="text-primary"> {fullName}</span>{' '}
        </p>
        <p>
          AgeRange: <span className="text-warning"> {ageRange}</span>{' '}
        </p>
        <p>
          Pet Types:
          {adoptType.map((pet, index) => (
            <span key={index} className="text-primary ml-2">
              {index === adoptType.length - 1 ? pet : `${pet},`}
            </span>
          ))}
        </p>
        <p>
          one Plus:
          <span className="text-warning"> {adoptSiblings ? 'Yes' : 'No'}</span>
        </p>
        <p>
          currPetCount:<span className="text-primary"> {currPetCount}</span>{' '}
        </p>
        <p>
          Description: <span className="text-warning"> {currPetInfo}</span>
        </p>
      </div>
    </Container>
  );
};

MultipleInputs.propTypes = {};

export default MultipleInputs;
