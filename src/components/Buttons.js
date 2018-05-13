import React from 'react';
import Button from './Button';

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Button
          color="#ff3f43"
          onClick={this.props.onAttack}
          text="Attack"
        />
        <Button
          color="#ff9a2b"
          disabled={this.props.maxSpecialAttacks === 3}
          onClick={this.props.onSpecialAttack}
          text="Special Attack"
        />
        <Button
          color="#76ff7e"
          disabled={this.props.maxHealings === 5}
          onClick={this.props.onHeal}
          text="Heal"
        />
        <Button
          color="#c7c7c7"
          onClick={this.props.onGiveUp}
          text="Give up"
        />
      </div>
    );
  }
}

export default Buttons;
