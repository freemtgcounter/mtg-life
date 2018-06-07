import { ADD_PLAYER, REMOVE_PLAYER, UPDATE_PLAYER } from "../actions/player";
import uuidv4 from 'uuid'

function newPlayer(name) {
 return {
  id: uuidv4(),
  name,
  life_total: 20,
  poison_counters: 0,
  background_class: "player background-pane neutral",
  history: []
 };
}

const reducer = (state = { players: [] }, action) => {
 switch (action.type) {
  case ADD_PLAYER:
    return {
      ...state,
      players: [...state.players, newPlayer(action.player_name)]
    }
  case UPDATE_PLAYER:
    return {
      ...state,
      players: state.players.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            ...action.updates
          }
        } else {
          return player;
        }
      })
    }
  case REMOVE_PLAYER:
    return {
      ...state,
      players: state.players.filter(({ id }) => id !== action.id)
    }
  default:
   return state;
 }
};

export default reducer;
