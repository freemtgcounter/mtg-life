import React from 'react';
import { connect } from "react-redux";
//import BackgroundSelector from "./BackgroundSelector";

class Player extends React.Component {
/*
  constructor(props) {
    super(props);
    this.state = {
      life_total: this.props.life_total || 20,
      poison_counters: this.props.poison_counters || 0,
      background_class: "player background-pane neutral",
      history: []
    }
  }
  */
/*
  adjustLifeTotal = param => e => {
    const old_life = this.state.life_total
    const new_life = old_life + param
    const life_object = { old_life: this.state.life_total, life_event: param }
    this.setState({
      life_total: new_life,
      history: [...this.state.history, life_object]
    });
  };

  adjustPoisonCounters = param => e => {
    this.setState({
      poison_counters: this.state.poison_counters + param
    });
  };

  setBackground = (bgClass) => {
    this.setState({
      background_class: "player background-pane "+bgClass
    });
  };
*/
  render() {
    /*
    const history_list = this.state.history.map((history_step) =>
      <p>({history_step.old_life}) {history_step.life_event > 0 ? "+" : ""}{history_step.life_event}</p>
    );
    */
    return (
      <section>
        <h4>{this.props.player.name}</h4>
        <p>{this.props.player.id}</p>
      </section>
      /*
        <div className={this.state.background_class}>
        <div className="mana large"></div>
          <div className="player_info">
            <input type="string" placeholder="player" className="player_name" />
            <h1>{this.state.life_total}</h1>
            <section className="life_buttons">
              <button onClick={this.adjustLifeTotal(-5)}>-5</button>
              <button onClick={this.adjustLifeTotal(-1)}>-1</button>
              <button onClick={this.adjustLifeTotal(1)}>+1</button>
              <button onClick={this.adjustLifeTotal(5)}>+5</button>
            </section>
            <section className="poison_buttons">
              <button onClick={this.adjustPoisonCounters(-1)}>-1</button>
              <span className="poison_count">{this.state.poison_counters}<span className="mana poison"></span></span>
              <button onClick={this.adjustPoisonCounters(1)}>+1</button>
            </section>
            <BackgroundSelector callbackToParent={this.setBackground} />
          </div>
          <section className="edh_damage">
            <div className="edh_player">
              <div className="edh_player-name">Gustrodamus</div>
              <div className="edh_player-dmg">
                <button>-1</button>
                <span className="edh_player-dmg-count">10</span>
                <button>+1</button>
              </div>
            </div>
            <div className="edh_player">
              <div className="edh_player-name">Gustrodamus</div>
              <div className="edh_player-dmg">
                <button>-1</button>
                <span className="edh_player-dmg-count">10</span>
                <button>+1</button>
              </div>
            </div>
          </section>
          <section className="player_log">{history_list.reverse()}</section>
        </div>
      */
    )
  }
}

const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

export default connect(mapStateToProps)(Player);
