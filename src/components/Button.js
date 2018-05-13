import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, disabled, onClick, text }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    style={{ backgroundColor: color }}
  >
    {text}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  disabled: false,
}

export default Button;
