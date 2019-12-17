import React, { Fragment } from 'react';
import CountingParent from './CoutingParent';

// Every instance of a component has its own state.
// If you have more than one CountingParent component on the page,
// each will have its own counter that starts at 0 and increments independently

function CounterGroup() {
  return (
    <Fragment>
      <CountingParent />
      <CountingParent />
      <CountingParent />
    </Fragment>
  );
}

export default CounterGroup;
