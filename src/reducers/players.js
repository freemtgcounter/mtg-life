// Players Reducer

const playersReducerDefaultState = [];

export default (state = playersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_PLAYER':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
