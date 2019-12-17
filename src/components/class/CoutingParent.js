import React, { Component } from 'react';
import Child from './Child';

export default class CoutingParent extends Component {
  // The constructor is called when a component is created
  constructor(props) {
    super(props);

    // Set the state here. Use "props" if needed.
    this.state = {
      actionCount: 0,
    };

    // Bind the event handler function, so that its 'this'
    // binding isn't lost when it gets passed to the button
    this.handleAction = this.handleAction.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  handleAction(action) {
    console.log('Child says', action);
    // Replace actionCount with an incremented value
    const { actionCount } = this.state;
    this.setState({
      actionCount: actionCount + 1,
    });
  }

  resetCounter(action) {
    const { actionCount } = this.state;
    this.setState({
      actionCount: 0,
    });
  }

  render() {
    const { actionCount } = this.state;

    return (
      <div>
        <Child onAction={this.handleAction} resetCounter={this.resetCounter} />
        <div className="mt-3">Clicked {actionCount} times</div>
      </div>
    );
  }
}
