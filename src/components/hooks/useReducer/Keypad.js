import React, { useReducer } from 'react';
import { Container, Button, ButtonGroup, Row, Col } from 'react-bootstrap';

const unlockOrder = [3, 5, 6, 2, 4, 1];
const initialState = {
  order: unlockOrder,
  status: ['_', '_', '_', '_', '_', '_'],
};

const reducer = (state, action) => {
  const first = state.order[0];
  const index = unlockOrder.indexOf(action);
  const newStatus = [...state.status];
  newStatus[index] = '*';

  if (first === action) {
    return {
      ...state,
      order: state.order.filter(num => num !== action),
      status: newStatus,
    };
  }
  return initialState;
};
const Keypad = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);
  const { order, status } = state;
  return (
    <Container className="d-flex flex-column col-4">
      <div className="py-3 text-center">
        <h3>{order.length === 0 ? 'Unlocked' : 'Enter 6 digit code'}</h3>
        <div className="display-4">
          {status.map((s, index) => (
            <span key={index}> {s}</span>
          ))}
        </div>
      </div>
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
