import React, { Component } from 'react';
import lightOn from '../../icons/light_on.png';
import lightOff from '../../icons/light_off.png';
import Switch from './Switch';

export default class House extends Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false,
  };

  // shallow Merge
  toggleKitchenLight = () =>
    this.setState(state => ({ kitchen: !state.kitchen }));

  toggleBathroomLight = () =>
    this.setState(state => ({ bathroom: !state.bathroom }));

  toggleLivingRoomLight = () =>
    this.setState(state => ({ livingRoom: !state.livingRoom }));

  toggleBedroomLight = () =>
    this.setState(state => ({ bedroom: !state.bedroom }));

  render() {
    const { kitchen, bathroom, livingRoom, bedroom } = this.state;

    return (
      <div className="mt-5">
        <div>
          Kitchen Lights:
          <img
            src={kitchen ? lightOn : lightOff}
            width="100rem"
            alt="light_bulb"
          />
          <Switch toggleSwitch={this.toggleKitchenLight} />
        </div>
        <div>
          Bathroom Lights:
          <img
            src={bathroom ? lightOn : lightOff}
            width="100rem"
            alt="light_bulb"
          />
          <Switch toggleSwitch={this.toggleBathroomLight} />
        </div>
        <div>
          Living Room Lights:
          <img
            src={livingRoom ? lightOn : lightOff}
            width="100rem"
            alt="light_bulb"
          />
          <Switch toggleSwitch={this.toggleLivingRoomLight} />
        </div>
        <div>
          Bedroom Lights:
          <img
            src={bedroom ? lightOn : lightOff}
            width="100rem"
            alt="light_bulb"
          />
          <Switch toggleSwitch={this.toggleBedroomLight} />
        </div>
      </div>
    );
  }
}
