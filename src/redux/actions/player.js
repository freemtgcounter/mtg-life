export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';

export const addPlayer = (player_name) => ({
  type: ADD_PLAYER,
  player_name
});

export const removePlayer = (id) => ({
  type: REMOVE_PLAYER,
  id
});

export const updatePlayer = (id, updates) => ({
  type: UPDATE_PLAYER,
  id,
  updates
});
