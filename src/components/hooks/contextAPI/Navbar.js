import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { WithUsersContext } from './UsersProvider';

const Navbar = ({ usersProvider }) => (
  <Row className="bg-warning p-3">
    {console.log('usersProvider', usersProvider)}
    <Col className="d-flex flex-wrap">
      {usersProvider.map(user => (
        <span className="mr-2" key={user.id}>
          {user.name.first}
        </span>
      ))}
    </Col>
  </Row>
);
Navbar.propTypes = {
  usersProvider: PropTypes.array.isRequired,
  // Provider receives value of users array
  // usersProvider= value = users array
};

export default WithUsersContext(Navbar);
