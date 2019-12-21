/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

// state is Boolean
export const Room = () => {
  const [lightStatus, setLightStatus] = useState(false);
  return (
    <Jumbotron>
      <Button
        variant={lightStatus ? 'danger' : 'primary'}
        onClick={() => setLightStatus(lightStatus => !lightStatus)}
      >
        {lightStatus ? 'OFF' : 'ON'}
      </Button>
      <p className="mt-5 display-4">
        The room is {lightStatus ? 'lit' : 'dark'}
      </p>
    </Jumbotron>
  );
};

// state is an Array
export const RandomList = () => {
  const [randomList, setRandomList] = useState([]);
  const addToList = () =>
    setRandomList([
      ...randomList,
      { id: uuidv4(), number: Math.floor(Math.random() * 100) },
    ]);
  return (
    <Jumbotron>
      <h1>RandomList</h1>
      <Button variant="success" onClick={addToList} className="m-5">
        Create a random number
      </Button>
      <ul className="d-flex flex-wrap">
        {randomList.map(obj => (
          <li className="list-group-item" key={obj.id}>
            {obj.number}
          </li>
        ))}
      </ul>
    </Jumbotron>
  );
};

// state is an object
const Feature = ({ onDecrease, onIncrease, value, name }) => (
  <div className="d-flex align-items-center">
    <Button variant="warning" onClick={() => onDecrease(name)}>
      -
    </Button>
    <div className="px-5">
      <div>{value}</div>
      <div>{name}</div>
    </div>
    <Button variant="success" onClick={() => onIncrease(name)}>
      +
    </Button>
  </div>
);

Feature.propTypes = {
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export const AudioControls = () => {
  const [audio, setAudio] = useState({
    volume: 1,
    treble: 1,
    base: 1,
    mid: 1,
  });

  const handleDecrease = key => {
    if (audio[key] > 0) {
      setAudio(audio => ({ ...audio, [key]: audio[key] - 1 }));
    }
  };
  const handleIncrease = key => {
    if (audio[key] < 100) {
      setAudio(audio => ({ ...audio, [key]: audio[key] + 1 }));
    }
  };

  const { volume, treble, base, mid } = audio;
  return (
    <div className="d-flex flex-column align-items-center">
      <Feature
        name="volume"
        value={volume}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <Feature
        name="treble"
        value={treble}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <Feature
        name="base"
        value={base}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <Feature
        name="mid"
        value={mid}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
};
