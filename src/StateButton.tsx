import React, { Component } from "react";

export default class StateButton extends Component {
  state: any;
  constructor(props) {
    super(props);
    this.state = { clicker: { clicks: 0 } };
  }
  increaseClick = () => {
    this.state.clicker.clicks++;
    this.setState(this.state);
  };
  render() {
    return (
      <button onClick={this.increaseClick}>{this.state.clicker.clicks}</button>
    );
  }
}
