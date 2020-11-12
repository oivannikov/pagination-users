import { SET_USERS, SET_SELECTED_USER, SET_UPDATE_USERS } from "./types";

export function actionSetUsers(users) {
  return {
    type: SET_USERS,
    payload: users,
  }
}

export function actionSetSelectedUser(user) {
  return {
    type: SET_SELECTED_USER,
    payload: user,
  }
}

export function actionUpDateUsers(newUsers) {
  return {
    type: SET_UPDATE_USERS,
    payload: newUsers,
  }
}
