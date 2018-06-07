import moment from 'moment';

// Game Reducer

const gameReducerDefaultState = {
  startDate: moment().startOf('day'),
  settingsOpen: false
};

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'TOGGLE_SETTINGS':
      return {
        ...state,
        settingsOpen: !state.settingsOpen
      }
    default:
      return state;
  }
};
