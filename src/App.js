import React, { Component } from 'react';
import Players from './components/Players';
import Buttons from './components/Buttons';
import Button from './components/Button';
import Rounds from './components/Rounds';
import './App.css';

class App extends Component {
  state = {
    gameIsRunning: false,
    playerName: 'You',
    monsterName: 'Monster',
    playerHealth: 100,
    monsterHealth: 100,
    userSpecialAttacks: 0,
    userHealings: 0,
    rounds: [],
  };

  startGame = () => {
    this.setState({
      gameIsRunning: true,
      playerHealth: 100,
      monsterHealth: 100,
      userSpecialAttacks: 0,
      userHealings: 0,
      rounds: [],
    });
  }

  generateDamage = (min, max) => {
    return Math.max(Math.floor(Math.random() * max) + 1, min);
  }
  checkWin = () => {
    if (this.state.monsterHealth <= 0) {
      // eslint-disable-next-line
      if (confirm('You won! New game?')) {
        this.startGame();
      } else {
        this.setState({
          gameIsRunning: false
        })
      }

      return true;
    } else if (this.state.playerHealth <= 0) {
      // eslint-disable-next-line
      if (confirm('You lost! New game?')) {
        this.startGame();
      } else {
        this.setState({
          gameIsRunning: false
        })
      }

      return true;
    }

    return false;
  }

  monsterAttacks = () => {
    const monsterDamage = this.generateDamage(1, 10);
    let newPlayerHealth = this.state.playerHealth - monsterDamage;
    const newRounds = [{
      isPlayer: false,
      text: `Monster hits the player by ${monsterDamage} points`,
    }].concat(this.state.rounds);

    if (newPlayerHealth < 0) {
      newPlayerHealth = 0;
    }

    this.setState({
      playerHealth: newPlayerHealth,
      rounds: newRounds,
    }, () => {
      this.checkWin();
    });
  }

  userAttacks = (min, max) => {
    const playerDamage = this.generateDamage(min, max);
    let newMonsterHealth = this.state.monsterHealth - playerDamage;
    const newRounds = [{
      isPlayer: true,
      text: `Player hits the monster by ${playerDamage} points`,
    }].concat(this.state.rounds);

    if (newMonsterHealth < 0) {
      newMonsterHealth = 0;
    }

    this.setState({
      monsterHealth: newMonsterHealth,
      rounds: newRounds,
    }, () => {
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    });

  }

  handleNameChange = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    this.setState({
      [field]: value
    });
  }

  handleAttack = () => {
    this.userAttacks(1, 10);
  }

  handleSpecialAttack = () => {
    this.setState({
      userSpecialAttacks: this.state.userSpecialAttacks + 1,
    })

    this.userAttacks(10, 20);
  }

  handleHeal = () => {
    const healingAmount = this.generateDamage(5, 10);
    let newPlayerHealth = this.state.playerHealth + healingAmount;
    const newRounds = [{
      isPlayer: true,
      text: `Player heals by ${healingAmount} points`,
    }].concat(this.state.rounds);

    if (newPlayerHealth > 100) {
      newPlayerHealth = 100;
    }

    this.setState({
      playerHealth: newPlayerHealth,
      userHealings: this.state.userHealings + 1,
      rounds: newRounds,
    }, () => {
      this.monsterAttacks();
    });
  }

  handleGiveUp = () => {
    this.setState({
      gameIsRunning: false
    })
  }

  render() {
    const {
      gameIsRunning,
      monsterHealth,
      monsterName,
      playerHealth,
      playerName,
      rounds,
      userHealings,
      userSpecialAttacks,
    } = this.state;

    return (
      <div className="game">
        <Players
          playerName={playerName}
          monsterName={monsterName}
          playerHealth={playerHealth}
          monsterHealth={monsterHealth}
          onNameChange={this.handleNameChange}
        />
        {gameIsRunning ? (
          <Buttons
            userHealings={userHealings}
            userSpecialAttacks={userSpecialAttacks}
            onAttack={this.handleAttack}
            onSpecialAttack={this.handleSpecialAttack}
            onHeal={this.handleHeal}
            onGiveUp={this.handleGiveUp}
          />
        ): (
          <Button
            color="#76ff7e"
            onClick={this.startGame}
            text="Start a new game"
          />
        )}
        {rounds.length > 0 && (
          <Rounds rounds={rounds} />
        )}
      </div>
    );
  }
}

export default App;
