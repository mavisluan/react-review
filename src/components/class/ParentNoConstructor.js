import React, { Component } from 'react';
import Child from './Child';

export default class ParentNoConstructor extends Component {
  // initialize state with a property initializer
  // you can access this.props if needed
  state = {
    counter: 0,
  };

  /*
    bind 'this' if use regular functions
    handleAction = this.handleAction.bind(this);
    resetCounter = this.resetCounter.bind(this);

    handleAction() {
        this.setState(state => ({ counter: state.counter + 1 }));
    }

    resetCounter() {
        this.setState({ counter: 0 });
    }
  */

  // write the handler as an arrow function will
  // retain the proper value of 'this' --> avoid 'binding'
  handleAction = () => this.setState(state => ({ counter: state.counter + 1 }));

  resetCounter = () => this.setState({ counter: 0 });

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Child onAction={this.handleAction} resetCounter={this.resetCounter} />
        <div className="mt-3">{counter}</div>
      </div>
    );
  }
}
