import {
  GET_USERS,
  SET_SELECTED_USER
} from "./types";

const initialState = {
  users: [],
  currentUser: {},
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case SET_SELECTED_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default: return state;
  }
}
