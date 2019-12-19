/* eslint-disable no-shadow */
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  // update state based on previous state
  const handleClick = () => {
    setCounter(counter => counter + 2);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-warning m-3"
      >
        Increment by 2
      </button>
      <div>Counter: {counter}</div>
    </div>
  );
};

Counter.propTypes = {};

export default Counter;
