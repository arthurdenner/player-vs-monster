import React from 'react';
import PropTypes from 'prop-types';

const Player  = ({ healthValue, id, inputValue, label, onChange }) => (
  <div className="text-center">
    <label>
      {label}
      <input
        id={id}
        className="text-center"
        onChange={onChange}
        value={inputValue}
      />
    </label>
    <div
      className="healthbar"
      style={{
        backgroundColor: 'green',
        margin: 0,
        color: 'white',
        width: healthValue + '%',
      }}
    >
      {healthValue}
    </div>
  </div>
);

Player.propTypes = {
  healthValue: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Player;
