import React, {Component} from 'react';

// Uncontrolled inputs: When an input is uncontrolled, it manages its own internal state

// Refs: A ref allows you to get direct access to a DOM element or an instance of a component.
// 1. Class Component / Stateful component
export class RefInput extends Component {
    showValue = () => {
        alert(`Input contains: ${this.input.value}`);
        console.log('this.input', this.input) // this.input --> <input type="text" />
    }

    render() {
        return(
            <div>
                <input type="text" ref={(inputValue) => this.input = inputValue}/>
                <button onClick={this.showValue}>Alert the Value!</button>
            </div>
        )
    }
}

// 2. Stateless Component
export const RefInputStateless = () => {
    let input = '';

    const showValue = () => {
        alert(`Input contains: ${input.value}`);
        console.log('input', input); // input --> <input type="text" />
    };
    return (
        <div>
            <input type="text" ref={(i) => input = i}/>
            <button onClick={showValue}>Alert the Value!</button>
        </div>
    )
}
