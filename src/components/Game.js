import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from "./Player";
import { addPlayer } from "../redux/actions/player.js";

class Game extends Component {

  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    this.props.dispatch(addPlayer(this.state.textInput));
  };

  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <p>Add a New Player</p>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        {this.props.reduxState.players.people.map(p => {
          return <Player key={p.id} player={p} />;
        })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

export default connect(mapStateToProps)(Game);
