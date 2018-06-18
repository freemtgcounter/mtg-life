import { ADD_PLAYER, REMOVE_PLAYER, UPDATE_PLAYER, EDH_DAMAGE, ADD_EDH, RESET_PLAYERS } from "../actions/player";
import uuidv4 from 'uuid'

function newPlayer(name) {
 return {
  id: uuidv4(),
  name,
  life_total: 20,
  poison_counters: 0,
  background_class: "player background-pane neutral",
  history: [],
  resetEdh: 0,
  edhDmg: []
 };
}

const reducer = (state = { players: [] }, action) => {
 switch (action.type) {
  case ADD_PLAYER:
    return {
      ...state,
      players: [...state.players, newPlayer(action.player_name)]
    }
  case RESET_PLAYERS:
    return {
      ...state,
      players: state.players.map((player) => {
        return {
          ...player,
          ...{
            life_total: action.life,
            poison_counters: 0,
            resetEdh: 1,
            history: [],
            edhDmg: []
          }
        }
      })
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
  case ADD_EDH:
    return {
      ...state,
      players: state.players.map((player) => {
        if (player.id === action.pid) {
          return {
            ...player,
            edhDmg: [...player.edhDmg, {
              pid: action.pid,
              oid: action.oid,
              damage: 0
            }]
          }
        } else {
          return player;
        }
      })
    }
  case EDH_DAMAGE:
    return ({
      ...state,
      players: state.players.map((player) => {
        if (player.id === action.pid) {
          return {
            ...player,
            edhDmg: player.edhDmg.map((dmg) => {
              if (dmg.oid === action.oid) {
                const prevDmg = dmg.damage
                action.damage += prevDmg
                return {
                  ...dmg,
                  ...action
                }
              } else {
                return dmg
              }
            })
          }
        } else {
          return player;
        }
      })
    })
  default:
   return state;
 }
};

export default reducer;
