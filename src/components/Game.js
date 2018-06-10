import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from "./Player";
import Header from "./Header";

class Game extends Component {
  render() {

    const player_count = "pcount-"+this.props.reduxState.players.players.length

    let main_classes = "";
    main_classes += this.props.reduxState.game.controlToggle ? 'controls-open ' : '';
    main_classes += this.props.reduxState.game.showEdhDamage ? 'edh-on ' : '';
    main_classes += this.props.reduxState.game.playerConfig ? 'config-on' : 'config-off';

    return (
      <main className={main_classes}>
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
