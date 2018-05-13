import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const MAX_SPECIAL_ATTACKS = 3;
const MAX_HEALINGS = 5;

const Buttons = ({
  onAttack,
  onGiveUp,
  onHeal,
  onSpecialAttack,
  userHealings,
  userSpecialAttacks,
}) => (
  <div className="buttons">
    <Button
      color="#ff3f43"
      onClick={onAttack}
      text="Attack"
    />
    <Button
      color="#ff9a2b"
      disabled={userSpecialAttacks === MAX_SPECIAL_ATTACKS}
      onClick={onSpecialAttack}
      text="Special Attack"
    />
    <Button
      color="#76ff7e"
      disabled={userHealings === MAX_HEALINGS}
      onClick={onHeal}
      text="Heal"
    />
    <Button
      color="#c7c7c7"
      onClick={onGiveUp}
      text="Give up"
    />
  </div>
);

Buttons.propTypes = {
  onAttack: PropTypes.func.isRequired,
  onGiveUp: PropTypes.func.isRequired,
  onHeal: PropTypes.func.isRequired,
  onSpecialAttack: PropTypes.func.isRequired,
  userHealings: PropTypes.number.isRequired,
  userSpecialAttacks: PropTypes.number.isRequired,
}

export default Buttons;
