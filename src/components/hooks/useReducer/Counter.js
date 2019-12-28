import React, { useReducer } from 'react';
import { Container, Button } from 'react-bootstrap';

const Counter = () => {
  // First render will create the state
  // The state will persist through the future renders
  // useReducer returns an array of
  // [newState, dispatch fn]           currentState
  //      |         |                   |
  const [sum, dispatch] = useReducer((state, action) => {
    console.log('state', state);
    console.log('action', action);
    return state + action; // return new state
  }, 0); // state = 0
  return (
    <Container className="text-center">
      <div>{sum}</div>
      <Button varient="primary" onClick={() => dispatch(1)}>
        {/* action = 1 */}
        {/* dispatch(action) */}
        Add 1
      </Button>
    </Container>
  );
};

Counter.propTypes = {};

export default Counter;
