import React from 'react';
import { Row } from 'react-bootstrap';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const ContactBoard = () => (
  <div className="container mt-5">
    <h1 className="text-left">CURD APP with Hooks</h1>
    <Row className="mt-5">
      <ContactForm />
      <ContactList />
    </Row>
  </div>
);

export default ContactBoard;
