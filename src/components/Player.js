import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Player extends Component {
  static xproptypes = {
    name: PropTypes.string.isRequired
  };
  render() {
    const { name, score, incrementScore } = this.props;
    return (
      <li className="player">
        <p className="name">{name}</p>
        <p className="score">score:{score}</p>
        <button onClick={() => incrementScore(name)}>+</button>
      </li>
    );
  }
}
