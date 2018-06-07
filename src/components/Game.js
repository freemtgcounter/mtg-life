import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from "./Player";
import Header from "./Header";
import { addPlayer } from "../redux/actions/player.js";

class Game extends Component {
  handleClick = () => {
    this.props.dispatch(addPlayer(this.state.textInput));
  };

  toggleSettings = () => {
    console.log("settings?");
  };

  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };

  render() {

    const player_count = "pcount-"+this.props.reduxState.players.players.length

    return (
      <wrapper>
        <Header />
        <section id="players" className={player_count}>
          {this.props.reduxState.players.players.map(p => {
            return <Player key={p.id} player={p} />;
          })}
        </section>
      </wrapper>
    );
  }
}

const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

export default connect(mapStateToProps)(Game);
