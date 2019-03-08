import {FETCH, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [], isFetching: false, error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCH:
    return {...state, isFetching:true};
    case SUCCESS:
    return {...state, isFetching:false, characters: [...state.characters, ...action.payload]}
    case FAILURE:
    return {...state, isFetching:false, error: action.payload}
    default:
      return state;
  }
};
