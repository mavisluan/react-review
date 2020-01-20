import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Redirect = () => {
  const history = useHistory();
  const redirect = () => {
    // use the parameter
    history.push('/historyHome');
  };
  return (
    <Container className="p-5 ">
      <p className="display-4 text-success">You've been redirected!</p>
      <Button onClick={() => redirect()}>Go back to /historyhome</Button>
    </Container>
  );
};
export default Redirect;
