import React from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ContactList = ({ users, setUsers, setEditId }) => (
  <Col sm>
    <h2>View Users</h2>
    {users.length === 0 ? (
      <p>No User yet</p>
    ) : (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>
                <Button variant="success" onClick={() => setEditId(user.id)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ml-3"
                  onClick={() => {
                    setUsers(users.filter(u => u.id !== user.id));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </Col>
);

ContactList.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
  setEditId: PropTypes.func.isRequired,
};

export default ContactList;
