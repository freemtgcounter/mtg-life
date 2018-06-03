import React from 'react';

const PlayerTile = ({ id, description, amount, createdAt }) => (
  <div className="player background-pane neutral">
    <div className="mana large"></div>
    <div className="player_info">
      <input type="string" placeholder="player" />
      <h1>XXX</h1>
      <section className="life_buttons">
        <button>-5</button>
        <button>-1</button>
        <button>+1</button>
        <button>+5</button>
      </section>
      <section className="poison_buttons">
        <button>-1</button>
        <span className="poison_count">{this.state.poison_counters}<span className="mana poison"></span></span>
        <button>+1</button>
      </section>
      <select><option value="neutral"> select background </option><option value="black"> black </option><option value="blue"> blue </option><option value="green"> green </option><option value="red"> red </option><option value="white"> white </option></select>
    </div>
    <section className="player_log"></section>
  </div>
);

export default PlayerTile;
