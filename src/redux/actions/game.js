export const NEW_GAME = 'NEW_GAME';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const PLAYER_CONFIG = 'PLAYER_CONFIG';
export const CONTROL_TOGGLE = 'CONTROL_TOGGLE';
export const SHOW_EDH = 'SHOW_EDH';

export const newGame = () => ({
  type: NEW_GAME
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS
});

export const togglePlayerConfig = () => ({
  type: PLAYER_CONFIG
});

export const controlsToggle = () => ({
  type: CONTROL_TOGGLE
})

export const edhDamageToggle = () => ({
  type: SHOW_EDH
})
