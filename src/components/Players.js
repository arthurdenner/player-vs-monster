import React from 'react';
import Player from './Player';

class Players extends React.Component {
  render() {
    return (
      <section className="row">
        <Player
          id="playerName"
          label="Your name:"
          healthValue={this.props.playerHealth}
          onChange={this.props.onNameChange}
          inputValue={this.props.playerName}
        />
        <Player
          id="monsterName"
          label="Monster name:"
          healthValue={this.props.monsterHealth}
          onChange={this.props.onNameChange}
          inputValue={this.props.monsterName}
        />
      </section>
    );
  }
}

export default Players;
