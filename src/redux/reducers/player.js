import { ADD_PLAYER } from "../actions/player";
import uuidv4 from 'uuid'

const initialState = {
 people: [{ id: uuidv4(), name: "Mesut Ozil" }]
};

function returnNameObj(name) {
 return {
  id: uuidv4(),
  name
 };
}
const reducer = (state = initialState, action) => {
 switch (action.type) {
  case ADD_PLAYER:
   return {
    ...state,
    people: [...state.people, returnNameObj(action.data)]
   };
  default:
   return state;
 }
};

export default reducer;
