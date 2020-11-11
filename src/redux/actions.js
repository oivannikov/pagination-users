import { GET_USERS, SET_SELECTED_USER } from "./types";

export function actionGetUsers(users) {
  return {
    type: GET_USERS,
    payload: users,
  }
}

export function actionSetSelectedUser(user) {
  return {
    type: SET_SELECTED_USER,
    payload: user,
  }
}
