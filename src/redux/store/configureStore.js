import { createStore, combineReducers } from 'redux';
import gameReducer from '../reducers/game';
import playersReducer from '../reducers/player';

export default () => {
  const store = createStore(
    combineReducers({
      game: gameReducer,
      players: playersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
