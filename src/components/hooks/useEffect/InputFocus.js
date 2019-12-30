import React, { useEffect, useState, useRef } from 'react';
import { Container, Form } from 'react-bootstrap';

const InputFocus = () => {
  // Store a reference to the input's DOM node
  const inputRef = useRef();

  // Store the input's value in state
  const [value, setValue] = useState('');
  useEffect(() => {
    // This runs AFTER the first render
    console.log('render');
    inputRef.current.focus();
    // The effect "depend on" inputRef
  }, [inputRef]); // -->  useEffect() runs on the change of inputRef
  // inputRef doesn't change between renders  -> {current: input.form-control},
  // so useEffect will not run again

  return (
    <Container>
      {console.log('inputRef', inputRef)}
      {console.log('value', value)}
      <Form.Control
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  );
};

export default InputFocus;
