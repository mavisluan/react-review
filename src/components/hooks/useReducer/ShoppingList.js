import React, { useReducer, useRef } from 'react';
import { Container, Form, ListGroup, Button } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';
//                current State
const reducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case 'add':
      return [...state, { id: uuidv4(), name: action.name }]; // return new state
    case 'remove':
      return state.filter(item => item.id !== action.id);
    default:
      break;
  }
};

const ShoppingList = () => {
  const inputRef = useRef();
  console.log('inputRef', inputRef);
  // initialize the state to be an empty array
  // new state  dispatch fn
  //      |         |
  const [items, dispatch] = useReducer(reducer, []); // state = []

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      // action = {type: 'add', name: 'something'}
      type: 'add',
      name: inputRef.current.value,
    });
    inputRef.current.value = '';
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          ref={inputRef}
          placeholder="Enter items to your shopping List"
        />
      </Form>
      <ListGroup>
        <div className="py-4 font-weight-bold">Shopping List</div>
        {console.log('items', items)}
        {items.map(item => (
          <ListGroup.Item key={item.id}>
            {item.name}
            <Button
              variant="danger"
              className="offset-2"
              onClick={() => dispatch({ type: 'remove', id: item.id })}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
