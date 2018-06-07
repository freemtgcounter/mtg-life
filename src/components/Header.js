import React, { Component } from 'react';
import { connect } from "react-redux";
import Player from "./Player";
import { addPlayer } from "../redux/actions/player.js";

class Header extends Component {

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
      <header>
        <p>Add a New Player</p>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </header>
    );
  }
}

const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

export default connect(mapStateToProps)(Header);
