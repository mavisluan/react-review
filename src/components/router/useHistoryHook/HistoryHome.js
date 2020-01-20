import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const HistoryHome = () => {
  // get the history ovject from useHistory()
  const history = useHistory();

  const redirect = () => {
    // use the parameter
    history.push('/redirect');
  };
  return (
    <Container className="p-5">
      <Button onClick={() => redirect()}>Go to /recirect route</Button>
    </Container>
  );
};

HistoryHome.propTypes = {};

export default HistoryHome;
