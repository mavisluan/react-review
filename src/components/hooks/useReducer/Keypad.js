/* eslint-disable no-param-reassign */
import React, { useReducer } from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';

const buttons = [1, 2, 3, 4, 5, 6];
const generateUnlockCode = () => {
  const code = new Array(6).fill(0);
  code.forEach((num, i) => {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    code[i] = num + randomNum;
  });
  console.log('secret code', code);
  return code;
};

const unlockOrder = generateUnlockCode();

const initialState = {
  show: false,
  position: 0,
  code: unlockOrder,
  status: ['_', '_', '_', '_', '_', '_'],
};

const reducer = (state, action) => {
  const { position, code, status, show } = state;
  if (code[position] === action) {
    const newStatus = [...status];
    newStatus[position] = '*';
    return {
      ...state,
      position: position + 1,
      status: newStatus,
    };
  }

  return initialState;
};

const Keypad = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);
  const { position, status } = state;
  return (
    <Container className="d-flex flex-column col-4">
      <div className="py-3 text-center">
        <h3>Enter 6 digit code</h3>
        <h3 className="text-success">{position === 6 && 'Unlocked'}</h3>
        <div className="display-4">
          {status.map((s, index) => (
            <span key={index}> {s}</span>
          ))}
        </div>
      </div>
      <ButtonGroup className="d-flex flex-wrap">
        {buttons.map((val, index) => (
          <Button
            onClick={() => dispatch(val)}
            className="border col-4"
            key={index}
          >
            {val}
          </Button>
        ))}
      </ButtonGroup>
      <Button variant="danger" onClick={() => dispatch('reset')}>
        Clear
      </Button>
    </Container>
  );
};

export default Keypad;
