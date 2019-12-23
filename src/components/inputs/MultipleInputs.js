import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Row, Col } from 'react-bootstrap';

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
    onePlus: true,
    currPetCount: 0,
    currPetInfo: '',
  };
  const [adoptInfo, setAdoptInfo] = useState(initialState);
  const {
    fullName,
    ageRange,
    adoptType,
    onePlus,
    currPetCount,
    currPetInfo,
  } = adoptInfo;

  // input value type is String
  const handleInput = e => {
    let { value, name } = e.target;
    // convert input from string to Boolean
    if (name === 'onePlus') {
      value = value === 'true';
    }

    console.log(`value: ${value}, name: ${name}`);
    console.log('typeof value', typeof value); // string
    setAdoptInfo({ ...adoptInfo, [name]: value });
  };

  // handle checkbox

  return (
    <Container>
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
              //   name={pet}
              //   value={pet}
              checked={adoptType.includes(pet)}
              onClick={() => {
                if (!adoptType.includes(pet)) {
                  console.log(`pet not selected`, pet);

                  setAdoptInfo({
                    ...adoptInfo,
                    adoptType: [...adoptType, pet],
                  });
                } else {
                  console.log(`pet selected`, pet);
                  setAdoptInfo({
                    ...adoptInfo,
                    adoptType: adoptType.filter(type => type !== pet),
                  });
                }
              }}
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
              name="onePlus"
              value
              checked={onePlus}
              onChange={handleInput}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="No"
              checked={!onePlus}
              name="onePlus"
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
            min={currPetCount}
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
      </Form>
      <div>
        <h3>Form input info</h3>
        <p> fullName: {fullName}</p>
        <p>AgeRange: {ageRange}</p>
        <p>
          Pet Types:{' '}
          {adoptType.map((pet, index) => (
            <span key={index}>{pet}, </span>
          ))}
        </p>
        <p>one Plus: {onePlus ? 'Yes' : 'No'}</p>
        <p>currPetCount: {currPetCount}</p>
        <p>Description: {currPetInfo}</p>
      </div>
    </Container>
  );
};

MultipleInputs.propTypes = {};

export default MultipleInputs;
