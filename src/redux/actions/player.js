export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const EDH_DAMAGE = 'EDH_DAMAGE';
export const ADD_EDH = 'ADD_EDH';

export const addPlayer = (player_name) => ({
  type: ADD_PLAYER,
  player_name
});

export const addEdh = (pid, oid) => ({
  type: ADD_EDH,
  pid,
  oid
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

export const adjustEdhDamage = (action) => ({
  type: EDH_DAMAGE,
  pid: action.id,
  oid: action.pid,
  damage: action.damage
});
