import React from 'react';
import PropTypes from 'prop-types';

function Switch({ toggleSwitch }) {
  return (
    <button
      type="button"
      className="btn-primary rounded ml-3"
      onClick={() => toggleSwitch()}
    >
      Switch
    </button>
  );
}

Switch.propTypes = {
  toggleSwitch: PropTypes.func.isRequired,
};

export default Switch;
