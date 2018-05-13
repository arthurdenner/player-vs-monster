import React from 'react';
import PropTypes from 'prop-types';

const Rounds = ({ rounds }) => (
  <ul>
    {rounds.map((round, index) => (
      <li
        key={index}
        className={round.isPlayer ? 'round player-round' : ' round monster-round'}
      >
        {round.text}
      </li>
    ))}
  </ul>
);

Rounds.propTypes = {
  rounds: PropTypes.arrayOf(PropTypes.shape({
    isPlayer: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default Rounds;
