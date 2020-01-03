import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Content from './Content';

const Body = () => (
  <Row className="text-white">
    <Col className="bg-danger" sm={6} md={3}>
      <Sidebar />
    </Col>
    <Col className="bg-primary" sm={6} md={9}>
      <Content />
    </Col>
  </Row>
);

Body.propTypes = {};

export default Body;
