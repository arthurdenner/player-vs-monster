import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div className="text-center">
        <label>
          {this.props.label}
          <input
            id={this.props.id}
            className="text-center"
            onChange={this.props.onChange}
            value={this.props.inputValue}
          />
        </label>
        <div
          className="healthbar"
          style={{
            backgroundColor: 'green',
            margin: 0,
            color: 'white',
            width: this.props.healthValue + '%',
          }}
        >
          {this.props.healthValue}
        </div>
      </div>
    );
  }
}

export default Player;
