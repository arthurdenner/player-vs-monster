import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const Players = ({
  monsterHealth,
  monsterName,
  onNameChange,
  playerHealth,
  playerName,
}) => (
  <section className="row">
    <Player
      id="playerName"
      label="Your name:"
      healthValue={playerHealth}
      onChange={onNameChange}
      inputValue={playerName}
    />
    <Player
      id="monsterName"
      label="Monster name:"
      healthValue={monsterHealth}
      onChange={onNameChange}
      inputValue={monsterName}
    />
  </section>
);

Players.propTypes = {
  monsterHealth: PropTypes.number.isRequired,
  monsterName: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  playerHealth: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,
}

export default Players;
