import React, { useState, useEffect } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

const ContactForm = ({ setUsers, users, editId, setEditId }) => {
  const initialState = { id: '', name: '', phone: '' };

  const [user, setUser] = useState(initialState);
  useEffect(() => {
    if (editId !== null) {
      const editUser = users.find(u => u.id === editId);
      setUser(editUser);
    }
  }, [editId, users]);

  const updateState = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const addUser = e => {
    const { name, phone } = user;
    e.preventDefault();
    setUsers([...users, { id: uuid(), name, phone }]);
    setUser(initialState);
  };

  const updateUser = e => {
    const { name, phone } = user;
    e.preventDefault();
    const newUsers = users.map(u => {
      if (u.id === editId) {
        u.name = name;
        u.phone = phone;
      }
      return u;
    });
    setUsers(users);
    setEditId(null);
    setUser(initialState);
  };

  const cancelUpdate = () => {
    setEditId(null);
    setUser(initialState);
  };

  return (
    <Col sm>
      <h2>Add User</h2>
      <Form className="text-left">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={updateState}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={updateState}
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
          <Button variant="danger" onClick={() => setEditId(null)}>
            Cancel
          </Button>
        )}
      </Form>
    </Col>
  );
};

ContactForm.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
  setEditId: PropTypes.func.isRequired,
  editId: PropTypes.string,
};

export default ContactForm;
