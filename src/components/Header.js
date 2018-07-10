import React, { Component } from 'react';
import { connect } from "react-redux";
import { addPlayer, resetPlayers, addEdh } from "../redux/actions/player.js";
import { toggleSettings, togglePlayerConfig, controlsToggle, edhDamageToggle, newGame } from "../redux/actions/game.js";

class Header extends Component {

  handlePlayerAdd = () => {
    this.props.dispatch(addPlayer(this.state.textInput))
    this.setState({ textInput: ""});
    this.nameFieldRef.value = "";
  };

  settingsToggleButtonClick = () => {
    this.props.dispatch(toggleSettings())
  }

  edhDamageToggleButtonClick = () => {
    this.props.dispatch(edhDamageToggle())
  }
  controlsToggleButtonClick = (e) => {
    e.preventDefault()
    this.props.dispatch(controlsToggle())
  }

  newGameButtonClick = () => {
    if (window.confirm('Really start a new game?')) {
      this.props.dispatch(newGame());
      this.props.dispatch(resetPlayers());
      this.props.reduxState.players.players.map(p => {
        this.props.reduxState.players.players.map(op => {
          if (p.id !== op.id) {
            return (this.props.dispatch(addEdh({pid: p.id, oid: op.id})))
          }
        })
      })
    }
  }

  new40LifeButtonClick = () => {
    if (window.confirm('Really start a new game?')) {
      this.props.dispatch(newGame());
      this.props.dispatch(resetPlayers(40));
      this.props.reduxState.players.players.map(p => {
        this.props.reduxState.players.players.map(op => {
          if (p.id !== op.id) {
            return (this.props.dispatch(addEdh({pid: p.id, oid: op.id})))
          }
        })
      })
    }
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
            <a href="" className="controls-toggle" onClick={this.controlsToggleButtonClick}>
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"></path>
              </svg>
            </a>
            <nav>
              <button className="player-config" onClick={this.playerConfigButtonClick}>player config</button>
              <button className="game-settings" onClick={this.settingsToggleButtonClick}>game settings</button>
            </nav>
            <section id="game-settings">
              <div>
                <p>Add a New Player</p>
                <input ref={(el) => this.nameFieldRef = el} type="text" onChange={this.handleChange} />
                <button onClick={this.handlePlayerAdd}>Add</button>
              </div>
              <div>
                <p>Show Commander Damage?</p>
                <button className="edhDmgToggle" onClick={this.edhDamageToggleButtonClick}>Toggle</button>
              </div>
              <div>
                <p>Start new game</p>
                <button className="edhDmgToggle" onClick={this.newGameButtonClick}>20 Life</button>
                <button className="edhDmgToggle" onClick={this.new40LifeButtonClick}>40 Life</button>
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
