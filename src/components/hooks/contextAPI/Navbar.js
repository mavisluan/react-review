import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import { WithUsersContext } from './UsersProvider';
// receive usersProvider as props
// reaches value throught usersProvider
const Navbar = ({ usersProvider }) => (
  <Row className="bg-warning">
    {console.log('usersProvider', usersProvider)}
    <Col className="d-flex flex-wrap">
      {usersProvider.map(user => (
        <Image
          key={user.id}
          src={user.picture.thumbnail}
          width="50em"
          alt="avatar"
          roundedCircle
          className="p-1"
        />
      ))}
    </Col>
  </Row>
);
Navbar.propTypes = {
  usersProvider: PropTypes.array.isRequired,
  // Provider receives value of users array
  // usersProvider= value = users array
};

// Call WithUsersContext() and pass Navbar as argument
export default WithUsersContext(Navbar);
