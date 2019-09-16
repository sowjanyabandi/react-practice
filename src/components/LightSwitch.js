import React, { Component } from "react";

export default class LightSwitch extends Component {
  state = { x: true };

  toggle = () => {
    this.setState({
      x: !this.state.x
    });
  };
  render() {
    return (
      <div>
        <h1>{this.props.s}</h1>
        <p>
          The light switch is <b>{this.state.x ? "on" : "off"}</b>
          <button onClick={this.toggle}>toggle</button>
        </p>
      </div>
    );
  }
}
