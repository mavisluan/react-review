import React from 'react';
import PropTypes from 'prop-types';
import lightOn from '../../icons/light_on.png';
import lightOff from '../../icons/light_off.png';

function Light({ room, lightStatus }) {
  return (
    <div>
      <div className="text-capitalize text-success">{room}</div>
      <img
        src={lightStatus ? lightOn : lightOff}
        height="200rem"
        alt="light_bulb"
      />
    </div>
  );
}

Light.propTypes = {
  lightStatus: PropTypes.bool.isRequired,
  room: PropTypes.string.isRequired,
};

export default Light;
