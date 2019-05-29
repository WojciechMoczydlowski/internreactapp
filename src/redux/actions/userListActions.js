import { ADD_USER, DELETE_USER_LIST, DELETE_USER } from "./types";
import { SORT_BY_NICKNAME, SORT_BY_EMAIL, SORT_BY_IPADRESS} from "./types";

export const addUser = payload => ({
  type: ADD_USER,
  payload
});

export const deleteUser = payload => ({
  type: DELETE_USER,
  payload
});

export const deleteUserList = () => ({
  type: DELETE_USER_LIST
});

export const sortByNickname = () => ({
  type: SORT_BY_NICKNAME
});

export const sortByEmail = () => ({
  type: SORT_BY_EMAIL
});

export const sortByIpadress = () => ({
  type: SORT_BY_IPADRESS
});