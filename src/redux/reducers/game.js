import { NEW_GAME, TOGGLE_SETTINGS, PLAYER_CONFIG, CONTROL_TOGGLE, SHOW_EDH } from "../actions/game";
import moment from 'moment';

// Game Reducer

const gameReducerDefaultState = {
  startDate: moment().startOf('minute'),
  settingsOpen: false,
  playerConfig: false,
  controlToggle: true,
  showEdhDamage: true
};

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        startDate: action.startDate
      }
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsOpen: !state.settingsOpen
      }
    case PLAYER_CONFIG:
      return {
        ...state,
        playerConfig: !state.playerConfig
      }
    case CONTROL_TOGGLE:
      return {
        ...state,
        controlToggle: !state.controlToggle
      }
    case SHOW_EDH:
      return {
        ...state,
        showEdhDamage: !state.showEdhDamage
      }
    default:
      return state;
  }
};
