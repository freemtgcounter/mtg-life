import React from 'react';
import { connect } from "react-redux";
import { updatePlayer, removePlayer, addEdh } from "../redux/actions/player"
import BackgroundSelector from "./BackgroundSelector";
import CommanderDamage from "./CommanderDamage";
import uuidv4 from 'uuid'



class Player extends React.Component {

  constructor(props) {

    super(props);

    this.props.reduxState.players.players.map(p => {
      if (p.id !== this.props.player.id) {
        if (this.props.player.edhDmg.filter(dmg => (dmg.oid === p.id)).length === 0) {
          return (this.props.dispatch(addEdh({pid: p.id, oid: this.props.player.id})))
        } else {
          return false;
        }
      } else {
        this.props.reduxState.players.players.map(op => {
          if (op.id !== this.props.player.id) {
            if (this.props.player.edhDmg.filter(dmg => (dmg.oid === op.id)).length === 0) {
              return ( this.props.dispatch(addEdh({pid: this.props.player.id, oid: op.id})) )
            } else {
              return false;
            }
          } else {
            return false;
          }
        })
        return false
      }
    })
  }

  adjustLifeTotal = param => e => {
    const old_life = this.props.player.life_total
    const new_life = old_life + param
    const life_object = { old_life: this.props.player.life_total, life_event: param }
    this.props.dispatch(updatePlayer( this.props.player.id,
      {
        life_total: new_life,
        history: [...this.props.player.history, life_object]
      }
    ))
  }

  adjustPoisonCounters = param => e => {
    const old_life = this.props.player.poison_counters
    const new_life = old_life + param
    const life_object = { old_life: this.props.player.poison_counters+"*", life_event: param+"*" }
    this.props.dispatch(updatePlayer( this.props.player.id,
      {
        poison_counters: new_life,
        history: [...this.props.player.history, life_object]
      }
    ));
  };

  onNameChange = (e) => {
    this.props.dispatch(updatePlayer( this.props.player.id,
      { name: e.target.value }
    ));
  };

  removePlayer = (e) => {
    if (window.confirm('Really delete player '+this.props.player.id+'?')) {
      this.props.dispatch(removePlayer( this.props.player.id));
    }
  }

  setBackground = (bgClass) => {
    this.props.dispatch(updatePlayer( this.props.player.id,
      {
        background_class: "player background-pane "+bgClass
      }
    ));
  };

  render() {
    const history_list = this.props.player.history.map((history_step) =>
      <p key={uuidv4()}>({history_step.old_life}) {history_step.life_event > 0 ? "+" : ""}{history_step.life_event}</p>
    );

    return (
      <div className={this.props.player.background_class}>

        <div className="mana large"></div>

        <div className="player_info">
          <input type="string" placeholder="player" className="player_name" value={this.props.player.name} onChange={this.onNameChange}/>
          <button className="remove_player pconfig-item" onClick={this.removePlayer}>x</button>
          <h1>{this.props.player.life_total}</h1>
          <BackgroundSelector callbackToParent={this.setBackground} />

          <section className="life_buttons">
            <button onClick={this.adjustLifeTotal(-5)}>-5</button>
            <button onClick={this.adjustLifeTotal(-1)}>-1</button>
            <button onClick={this.adjustLifeTotal(1)}>+1</button>
            <button onClick={this.adjustLifeTotal(5)}>+5</button>
          </section>

          <section className="player_body">
            <section className="player_body-aux">

              <section className="poison_buttons">
                <button onClick={this.adjustPoisonCounters(-1)}>-1</button>
                <span className="poison_count">{this.props.player.poison_counters}<span className="mana poison"></span></span>
                <button onClick={this.adjustPoisonCounters(1)}>+1</button>
              </section>

              <section className="edh_damage">
                {this.props.reduxState.players.players.map(p => {
                  if (p.id !== this.props.player.id) {
                    return (
                      <CommanderDamage key={uuidv4()} player={this.props.player} opponent={p} />
                    )
                  } else {
                    return false
                  }
                })}
              </section>

            </section>

            <section className="player_log">
              <div className="log_bg">
                {history_list.reverse()}
              </div>
            </section>

          </section>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

export default connect(mapStateToProps)(Player);
