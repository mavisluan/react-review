import React, { useReducer } from 'react';
import { Container, Button } from 'react-bootstrap';

const reducer = (state, action) => action;

const Room = () => {
  const [state, dispatch] = useReducer(reducer, 'off');
  return (
    <Container>
      <Button variant="secondary" onClick={() => dispatch('off')}>
        OFF
      </Button>
      <Button variant="warning" onClick={() => dispatch('low')}>
        LOW
      </Button>
      <Button variant="primary" onClick={() => dispatch('medium')}>
        MEDIUM
      </Button>
      <Button variant="success" onClick={() => dispatch('high')}>
        HIGH
      </Button>
      <h3 className="font-weight-bold mt-3"> Light status: {state}</h3>
    </Container>
  );
};

Room.propTypes = {};

export default Room;
