import {
  SET_USERS,
  SET_SELECTED_USER,
  SET_UPDATE_USERS
} from "./types";

const initialState = {
  users: [],
  currentUser: {},
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case SET_SELECTED_USER:
      return {
        ...state,
        currentUser: action.payload,
      }

    case SET_UPDATE_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default: return state;
  }
}
