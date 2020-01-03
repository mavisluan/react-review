import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Body from './Body';

const UsersInfo = () => (
  <Container>
    <Navbar />
    <Body />
  </Container>
);

UsersInfo.propTypes = {};

export default UsersInfo;
