import React from 'react';
import { connect } from "react-redux";
import uuidv4 from 'uuid'
import { adjustEdhDamage } from "../redux/actions/player.js";

class CommanderDamage extends React.Component {

  edhDamage = dmg => {
    this.props.dispatch(adjustEdhDamage(dmg));
  };

  render() {
    const p = this.props.player
    const opponent_id = this.props.opponent.id
    const opponent_name = this.props.opponent.name

    return (
      p.edhDmg.map(d => {
        if (d.oid === opponent_id) {
          return (
            <div key={uuidv4()} className="edh_player">
              <div className="edh_player-name">{opponent_name}</div>
              <div className="edh_player-dmg">
                <button onClick={() => {this.edhDamage({pid: p.id, oid: opponent_id, damage: -1})}}> - 1 </button>
                <span className="edh_player-dmg-count">{d.damage}</span>
                <button onClick={() => {this.edhDamage({pid: p.id, oid: opponent_id, damage: 1})}}> + 1 </button>
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
