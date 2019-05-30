import {
    SET_DELETE_USERS_LIST_DIALOG,
    SET_DELETE_USER_DIALOG,
  } from "./types";
  
  export const setDeleteUsersListDialog = (payload) => ({
    type: SET_DELETE_USERS_LIST_DIALOG,
    payload
  });
  
  export const setDeleteUserDialog = (payload) => ({
    type:  SET_DELETE_USER_DIALOG,
    payload
  });
  