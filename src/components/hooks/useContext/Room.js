import React, { useContext } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { RoomContext } from './RoomStore';

const Room = () => {
  const { isLit, onToggleLight } = useContext(RoomContext);
  const textColor = isLit ? 'text-primary' : 'text-white';

  return (
    <Jumbotron className={isLit ? 'bg-warning' : 'bg-dark'}>
      <Button variant="primary" onClick={onToggleLight}>
        Switch
      </Button>
      <p className={`mt-3 font-weight-bold ${textColor}`}>
        The room is {isLit ? 'light' : 'dark'}
      </p>
    </Jumbotron>
  );
};

Room.propTypes = {};

export default Room;
