import React, { useReducer } from 'react';
import { Container, Button, ButtonGroup, Row, Col } from 'react-bootstrap';

const unlockOrder = [3, 5, 6, 2, 4, 1];

const reducer = (state, action) => {
  const first = state[0];
  if (first === action) {
    return state.filter(num => num !== action);
  }
  return unlockOrder;
};
const Keypad = () => {
  const init = () => unlockOrder;

  const [state, dispatch] = useReducer(reducer, unlockOrder, init);
  console.log('state', state);
  return (
    <Container className="d-flex flex-column col-4">
      <h3>{state.length === 0 ? 'Unlocked' : 'Enter 6 digit code'}</h3>
      <ButtonGroup>
        <Button onClick={() => dispatch(1)} className="border border-white">
          1
        </Button>
        <Button onClick={() => dispatch(2)} className="border border-white">
          2
        </Button>
        <Button onClick={() => dispatch(3)} className="border border-white">
          3
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => dispatch(4)} className="border border-white">
          4
        </Button>
        <Button onClick={() => dispatch(5)} className="border border-white">
          5
        </Button>
        <Button onClick={() => dispatch(6)} className="border border-white">
          6
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Keypad;
// Todo: 1. Generate code randomly  2. Show effect when entering the right digit or wrong
