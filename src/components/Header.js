import React, { Component } from 'react';
import { connect } from "react-redux";
import { addPlayer } from "../redux/actions/player.js";
import { toggleSettings, togglePlayerConfig, controlsToggle, edhDamageToggle } from "../redux/actions/game.js";

class Header extends Component {

  handlePlayerAdd = () => {
    this.props.dispatch(addPlayer(this.state.textInput));
  };

  settingsToggleButtonClick = () => {
    this.props.dispatch(toggleSettings());
  }

  edhDamageToggleButtonClick = () => {
    this.props.dispatch(edhDamageToggle());
  }
  controlsToggleButtonClick = () => {
    this.props.dispatch(controlsToggle());
  }

  playerConfigButtonClick = () => {
    this.props.dispatch(togglePlayerConfig());
  }

  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };

  render() {
    return (
        <header className={this.props.reduxState.game.settingsOpen ? 'open' : 'close'}>
          <div>
            <button className="controls-toggle" onClick={this.controlsToggleButtonClick}></button>
            <nav>
              <button className="player-config" onClick={this.playerConfigButtonClick}>player config</button><br />
              <button className="game-settings" onClick={this.settingsToggleButtonClick}>game settings</button>
            </nav>
            <section id="game-settings">
              <div>
                <p>Add a New Player</p>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.handlePlayerAdd}>Add</button>
              </div>
              <div>
                <p>Show Commander Damage?</p>
                <button className="edhDmgToggle" onClick={this.edhDamageToggleButtonClick}>Toggle</button>
              </div>
            </section>
          </div>
        </header>
    );
  }
}

const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

export default connect(mapStateToProps)(Header);
