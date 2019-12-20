import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { ContactContext } from './ContactContext';

// render Consumer Component
// wrap content inside Consumer Component as {children}
// extract data from value in Provider
const ContactForm = () => (
  <ContactContext.Consumer>
    {({
      editId,
      updateFormState,
      updateUser,
      addUser,
      cancelUpdate,
      user: { name, phone },
    }) => (
      <Col sm>
        <h2>Add User</h2>
        <Form className="text-left">
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={updateFormState}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={updateFormState}
            />
          </Form.Group>
          <Button
            variant={editId ? 'success' : 'primary'}
            type="submit"
            onClick={editId ? updateUser : addUser}
          >
            {editId ? 'Update' : 'Add'}
          </Button>
          {editId && (
            <Button variant="danger" onClick={cancelUpdate}>
              Cancel
            </Button>
          )}
        </Form>
      </Col>
    )}
  </ContactContext.Consumer>
);

export default ContactForm;
