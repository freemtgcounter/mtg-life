import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from "./Player";
import Header from "./Header";

class Game extends Component {
  render() {

    const player_count = "pcount-"+this.props.reduxState.players.players.length

    return (
      <main>
        <Header />
        <section id="players" className={player_count}>
          {this.props.reduxState.players.players.map(p => {
            return <Player key={p.id} player={p} />;
          })}
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

export default connect(mapStateToProps)(Game);
