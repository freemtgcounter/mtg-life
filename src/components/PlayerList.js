import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerTile from "./PlayerTile";

export const PlayerList = (props) => (
  <div>
    {
      props.players.length === 0 ? (
        <section id="players">
          <span>No playaz</span>
        </section>
      ) : (
        <section id="players" className="pcount-2">
          {props.players.map((player) => {
            return <PlayerTile />;
          })}
        </section>
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps)(PlayerList);
