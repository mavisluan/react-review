import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';

const UsersInfo = () => (
  <Container>
    <Navbar />
    <Row className="bg-primary p-3">
      <Col className="bg-danger" sm={6}>
        Side bar
      </Col>
      <Col className="bg-success" sm={6}>
        Content
      </Col>
    </Row>
  </Container>
);

UsersInfo.propTypes = {};

export default UsersInfo;
