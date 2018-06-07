import { createStore, combineReducers } from 'redux';
import gameReducer from '../reducers/game';
import playersReducer from '../reducers/player';
import { loadState, saveState } from './localStorage';

const configureStore = () => {

  const persistedState = loadState();

  const store = createStore(
    combineReducers({
      game: gameReducer,
      players: playersReducer
    }),
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    console.log(store.getState());
    saveState(store.getState());
  });

  return store;
};

export default configureStore;
