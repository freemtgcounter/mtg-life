import React, { Component } from 'react';
import Player from "./components/Player";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player_count: 2,
      starting_life: this.props.starting_life || 20
    }
  }

  newGame() {
    this.setState({ starting_life: 20 });
  }

  newEdh() {
    this.setState({ starting_life: 40 });
  }

  addPlayer() {
    this.setState({ player_count: this.state.player_count + 1 });
  }

  removePlayer() {
    this.setState({ player_count: this.state.player_count - 1 });
  }

  render() {
    const players = [];
    for(let i = 0; i < this.state.player_count; i++) {
      players.push(<Player key={i} life_total={this.state.starting_life} onNewEdh={this.newEdh.bind(this)}  onNewGame={this.newGame.bind(this)} />);
    }
    return (
      <div className="App">
        <header>
          <h2>Super Simple Life Tracker</h2>
          <button onClick={() => this.newGame()}>New Game</button>
          <button onClick={() => this.newEdh()}>New Edh</button>
          <button onClick={() => this.addPlayer()}>Add Player</button>
          <button onClick={() => this.removePlayer()}>Remove Player</button>
        </header>

        {players}

      </div>
    );
  }
}

export default App;
