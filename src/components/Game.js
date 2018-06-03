import React, { Component } from 'react';
import Player from "./Player";
import PlayerList from "./PlayerList";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player_count: 2,
      starting_life: this.props.starting_life || 20,
      menu_open: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.newGame = this.newGame.bind(this);
    this.newEdh = this.newEdh.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  toggleMenu() {
    this.setState({ menu_open: !this.state.menu_open })
  }

  closeMenu() {
    this.setState({ menu_open: false })
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
    const player_class = "pcount-"+this.state.player_count;
    for(let i = 0; i < this.state.player_count; i++) {
      players.push(<Player key={i} life_total={this.state.starting_life} onNewEdh={this.newEdh.bind(this)} onNewGame={this.newGame.bind(this)} />);
    }
    return (
      <div className="app-wrapper">
        <section className="app-controls">
          <header>
            <button onClick={this.toggleMenu}>#</button>
            <button onClick={this.closeMenu}>mtgcounter.life</button>
          </header>
          {this.state.menu_open &&
            <nav id="controls">
              <button onClick={this.newGame}>New Game</button>
              <button onClick={this.newEdh}>New Edh</button>
              <button onClick={this.addPlayer}>Player +</button>
              <button onClick={this.removePlayer}>Player -</button>
            </nav>
          }
        </section>
        <section id="players" className={player_class}>
          {players}
        </section>
      </div>
    );
  }
}
/*
<PlayerList />
<section id="players" className={player_class}>
  {players}
</section>
*/
export default Game;
