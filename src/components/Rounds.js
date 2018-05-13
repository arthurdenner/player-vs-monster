import React from 'react';

class Rounds extends React.Component {
  render() {
    return (
      <ul>
        {this.props.rounds.map((round, index) => (
          <li
            key={index}
            className={round.isPlayer ? 'round player-round' : ' round monster-round'}
          >
            {round.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default Rounds;
