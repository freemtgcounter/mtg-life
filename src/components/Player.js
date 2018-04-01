import React from 'react';
import BackgroundSelector from "./BackgroundSelector";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      life_total: this.props.life_total || 20,
      poison_counters: this.props.poison_counters || 0,
      background_class: "player background-pane neutral",
      history: []
    }
  }

  componentWillReceiveProps(newProps) {
    // parent will reset these props for a new game, so history is cleared
    this.setState({
      life_total: newProps.life_total,
      poison_counters: 0,
      history: []
    });
  }

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

  render() {
    const history_list = this.state.history.map((history_step) =>
      <p>({history_step.old_life}) {history_step.life_event > 0 ? "+" : ""}{history_step.life_event}</p>
    );
    return (
        <div className={this.state.background_class}>
        <div className="mana large"></div>
          <div className="player_info">
            <input type="string" placeholder="player" />
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
          <section className="player_log">{history_list.reverse()}</section>
        </div>
    )
  }
}

export default Player;
