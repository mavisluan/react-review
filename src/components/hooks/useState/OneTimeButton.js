import React, { Component, useState } from 'react';

export class OneTimeButtonClass extends Component {
  state = { disabled: false };

  handleClick = () => {
    alert('The button is clicked. It is disabled.');
    this.setState({ disabled: true });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div className="m-5 border border-primary p-3">
        <h3>This is a class component.</h3>
        <button
          type="button"
          disabled={disabled}
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          {!disabled ? 'Click Me!' : 'Disabled'}
        </button>
        <p className="text-danger mt-5">
          You can only click the button above once.
        </p>
      </div>
    );
  }
}

export const OneTimeButtonHooks = () => {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    alert('The button is clicked. It is disabled.');
    setDisabled(true);
  };
  return (
    <div className="m-5 border border-primary p-3">
      <h3>This is a function component with useState.</h3>
      <button
        type="button"
        disabled={disabled}
        className="btn btn-primary"
        onClick={handleClick}
      >
        {!disabled ? 'Click Me!' : 'Disabled'}
      </button>
      <p className="text-danger mt-5">
        You can only click the button above once.
      </p>
    </div>
  );
};
