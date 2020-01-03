import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { WithUsersContext } from './UsersProvider';
// receive usersProvider as props
// reaches value throught usersProvider
const Navbar = ({ usersProvider: { users, setSelectedId } }) => (
  <Row className="bg-warning">
    <Col className="d-flex flex-wrap">
      {users.map(user => (
        <Button
          key={user.id}
          variant="warning"
          className="badge-pill badge-warning p-2"
        >
          <Image
            href="#"
            src={user.picture.thumbnail}
            width="50em"
            alt="avatar"
            roundedCircle
            className="button button-primary"
            onClick={() => setSelectedId(user.id)}
          />
        </Button>
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
