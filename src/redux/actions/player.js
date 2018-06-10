export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const EDH_DAMAGE = 'EDH_DAMAGE';
export const ADD_EDH = 'ADD_EDH';

export const addPlayer = (player_name) => ({
  type: ADD_PLAYER,
  player_name
});

export const addEdh = (dmg) => ({
  type: ADD_EDH,
  pid: dmg.pid,
  oid: dmg.oid
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

export const adjustEdhDamage = (dmg) => ({
  type: EDH_DAMAGE,
  pid: dmg.pid,
  oid: dmg.oid,
  damage: dmg.damage
});
