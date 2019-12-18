import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Light from './Light';
import Switch from './Switch';

const Room = ({ lightStatus, room, toggleSwitch }) => (
  <>
    <Light lightStatus={lightStatus} room={room} />
    <Switch toggleSwitch={toggleSwitch} />
  </>
);

Room.propTypes = {
  lightStatus: PropTypes.bool.isRequired,
  room: PropTypes.string.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
};

export default Room;
