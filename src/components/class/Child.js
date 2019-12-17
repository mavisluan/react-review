import React from 'react';
import PropTypes from 'prop-types';

function Child({ onAction, resetCounter }) {
  return (
    <div>
      <button
        type="button"
        onClick={onAction}
        className="btn-primary rounded mt-3"
      >
        Click Me!
      </button>
      <button
        className="btn-danger rounded ml-4"
        type="button"
        onClick={() => resetCounter()}
      >
        Reset
      </button>
    </div>
  );
}

Child.propTypes = {
  onAction: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
};

export default Child;
