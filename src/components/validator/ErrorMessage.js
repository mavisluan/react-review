import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p>This is required</p>;
      case 'minLength':
        return <p>Your last name need minimum 2 characters</p>;
      case 'pattern':
        return <p>Enter a valid eamil address</p>;
      case 'min':
        return <p>minimum age is 18.</p>;
      case 'validate':
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
};

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorMessage;
