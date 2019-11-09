import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Board = () => {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  return (
    <div className="container mt-5">
      <h1 className="text-left">CURD APP with Hooks</h1>
      <Row className="mt-5">
        <ContactForm
          setUsers={setUsers}
          users={users}
          editId={editId}
          setEditId={setEditId}
        />
        <ContactList users={users} setEditId={setEditId} setUsers={setUsers} />
      </Row>
    </div>
  );
};

export default Board;
