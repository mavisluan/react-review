import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const DocTitle = () => {
  const [title, setTitle] = useState(document.title);
  const [message, setMessage] = useState('');
  useEffect(() => {
    console.log('update document title');
    document.title = title;
  }, [title]);

  const handleSubmit = () => {
    console.log('submiting');
    setMessage(title);
    setTitle('');

    setTimeout(() => {
      console.log('clearing');
      setMessage('');
    }, 3000);
  };
  return (
    <Container>
      <Form>
        <Form.Control value={title} onChange={e => setTitle(e.target.value)} />
        <Button onClick={handleSubmit} className="my-4">
          Click Me!
        </Button>
      </Form>
      <div className="text-danger ">{message}</div>
    </Container>
  );
};

DocTitle.propTypes = {};

export default DocTitle;
