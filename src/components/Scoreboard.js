import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {
  state = {
    players: [
      { name: "kushal", score: 10 },
      { name: "bunny", score: 20 },
      { name: "sampath", score: 30 }
    ]
  };
  incrementScore = name => {
    const newPlayers = this.state.players.map(player => {
      if (player.name === name) {
        return {
          name: player.name,
          score: player.score + 1
        };
      }
      return player;
    });
    this.setState({ players: newPlayers });
  };
  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {[...this.state.players].map(({ name, score }) => {
            return (
              <Player
                key={name}
                name={name}
                score={score}
                incrementScore={this.incrementScore}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
