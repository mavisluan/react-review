import React from 'react';
import PropTypes from 'prop-types';

function Child({ onAction }) {
  return (
    <button
      type="button"
      onClick={onAction}
      className="btn-primary rounded mt-3"
    >
      Click Me!
    </button>
  );
}

Child.propTypes = {
  onAction: PropTypes.func.isRequired,
};

export default Child;
