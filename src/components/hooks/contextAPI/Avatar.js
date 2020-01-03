import React from 'react';
import PropTypes from 'prop-types';
import { Image, Button } from 'react-bootstrap';

const Avatar = ({ pictureUrl, action, size }) => (
  <Button variant="warning" className="badge-pill badge-warning p-2">
    <Image
      href="#"
      src={pictureUrl}
      width={size}
      alt="avatar"
      roundedCircle
      className="button button-primary"
      onClick={action}
    />
  </Button>
);

Avatar.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};

export default Avatar;
