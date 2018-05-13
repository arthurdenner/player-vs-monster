import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        disabled={this.props.disabled || false}
        onClick={this.props.onClick}
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
