import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { UsersContext } from './UsersStore';

const Navbar = () => (
  <UsersContext.Consumer>
    {users => (
      <Row className="bg-warning p-3">
        {console.log('users', users)}
        <Col className="d-flex flex-wrap">
          {users.map(user => (
            // <img
            //   src={user.picture.thumbnail}
            //   width="75em"
            //   alt="avatar"
            //   key={user.id}
            // />
            <span className="mr-2">{user.name.first}</span>
          ))}
        </Col>
      </Row>
    )}
  </UsersContext.Consumer>
);
// Navbar.propTypes = {};

export default Navbar;
