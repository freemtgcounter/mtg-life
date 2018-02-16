import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      life_total: this.props.life_total || 20
    }
  }

  componentWillReceiveProps(newProps) {
      this.setState({life_total: newProps.life_total});
  }

  adjustLifeTotal = param => e => {
    this.setState({
      life_total: this.state.life_total + param
    });
  };

  render() {
    return (
      <div className="player">
          <input type="string" placeholder="player" />
          <h1>{this.state.life_total}</h1>
          <button onClick={this.adjustLifeTotal(5)}>+5</button>
          <button onClick={this.adjustLifeTotal(1)}>+1</button>
          <button onClick={this.adjustLifeTotal(-1)}>-1</button>
          <button onClick={this.adjustLifeTotal(-5)}>-5</button>
      </div>
    )
  }
}

export default Player;
