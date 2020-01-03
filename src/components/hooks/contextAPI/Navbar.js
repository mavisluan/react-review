import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { WithUsersContext } from './UsersProvider';
import Avatar from './Avatar';
// receive usersProvider as props
// reaches value throught usersProvider
const Navbar = ({ usersProvider: { users, setSelectedId } }) => (
  <Row className="bg-warning">
    <Col className="d-flex flex-wrap">
      {users.map(user => (
        <Avatar
          key={user.id}
          pictureUrl={user.picture.thumbnail}
          action={() => setSelectedId(user.id)}
          size="50em"
        />
      ))}
    </Col>
  </Row>
);
Navbar.propTypes = {
  usersProvider: PropTypes.object.isRequired,
  // Provider receives value of users array
  // usersProvider= value = an object {users, selectedId, setSelectedId}
};

// Call WithUsersContext() and pass Navbar as argument
export default WithUsersContext(Navbar);
