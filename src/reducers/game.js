import moment from 'moment';

// Game Reducer

const gameReducerDefaultState = {
  startDate: moment().startOf('day')
};

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        ...state,
        startDate: action.startDate
      };
    default:
      return state;
  }
};
