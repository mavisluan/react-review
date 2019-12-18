import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Switch from './Switch';
import Light from './Light';

export default class House extends Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false,
    rooms: {
      guestRoom: true,
      study: false,
      partyRoom: true,
    },
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

  // deep merge: update data nestesd in an object
  // use spread operator to spread the object, then update the nested data
  toggleGuestRoomLight = () =>
    this.setState(state => ({
      rooms: {
        ...state.rooms,
        guestRoom: !state.rooms.guestRoom,
      },
    }));

  toggleStudyLight = () =>
    this.setState(state => ({
      rooms: {
        ...state.rooms,
        study: !state.rooms.study,
      },
    }));

  togglePartyRoomLight = () =>
    this.setState(state => ({
      rooms: {
        ...state.rooms,
        partyRoom: !state.rooms.partyRoom,
      },
    }));

  render() {
    const {
      kitchen,
      bathroom,
      livingRoom,
      bedroom,
      rooms: { guestRoom, study, partyRoom },
    } = this.state;

    return (
      <div className="mt-5">
        <Row className="py-5">
          <Col xs={6} sm={6} md={3}>
            <Light lightStatus={kitchen} room="kitchen" />
            <Switch toggleSwitch={this.toggleKitchenLight} />
          </Col>
          <Col xs={6} sm={6} md={3}>
            <Light lightStatus={bathroom} room="bathroom" />
            <Switch toggleSwitch={this.toggleBathroomLight} />
          </Col>
          <Col xs={6} sm={6} md={3}>
            <Light lightStatus={livingRoom} room="livingRoom" />
            <Switch toggleSwitch={this.toggleLivingRoomLight} />
          </Col>
          <Col xs={6} sm={6} md={3}>
            <Light lightStatus={bedroom} room="bedroom" />
            <Switch toggleSwitch={this.toggleBedroomLight} />
          </Col>
        </Row>
        <Row className="py-5">
          <Col xs={6} sm={6} md={3}>
            <Light lightStatus={guestRoom} room="guestRoom" />
            <Switch toggleSwitch={this.toggleGuestRoomLight} />
          </Col>
          <Col xs={6} sm={6} md={3}>
            <Light lightStatus={study} room="study" />
            <Switch toggleSwitch={this.toggleStudyLight} />
          </Col>
          <Col xs={6} sm={6} md={3}>
            <Light lightStatus={partyRoom} room="partyRoom" />
            <Switch toggleSwitch={this.togglePartyRoomLight} />
          </Col>
        </Row>
      </div>
    );
  }
}
