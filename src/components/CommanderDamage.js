import React from 'react';
import { connect } from "react-redux";
import { adjustEdhDamage } from "../redux/actions/player.js";

class CommanderDamage extends React.Component {

  addDamage = e => {
    this.props.dispatch(adjustEdhDamage(() => {e.target.value}));
    console.log(e.target.value)
  };

  render() {
    const p = this.props.player
    const opponent_id = this.props.opponent_id
    return (
      p.edhDmg.map(d => {
        if (d.opponent_id === opponent_id) {
          return (
            <div key={this.props.key} className="edh_player">
              <div className="edh_player-name">{p.name}</div>
              <div className="edh_player-dmg">
                <button> - 1 </button>
                <span className="edh_player-dmg-count">{d.damage}</span>
                <button value={{pid: this.props.player_id, oid: p.id, damage: 1}} onClick={this.addDamage}> + 1 </button>
              </div>
            </div>
          )
        } else {
          return false
        }
      }
    ))
  }
}

const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

export default connect(mapStateToProps)(CommanderDamage);
