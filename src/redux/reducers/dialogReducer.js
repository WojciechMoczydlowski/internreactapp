import {
  SET_DELETE_USERS_LIST_DIALOG,
  SET_DELETE_USER_DIALOG,
} from "../actions/types";

  const dialog = {
   showDeleteUsersListDialog:false,
   showDeleteUserDialog:false,
  };
  const dialogReducer = (state = dialog, action) => {
    switch (action.type) {
      case SET_DELETE_USERS_LIST_DIALOG:
        const showDeleteUsersListDialog = action.payload;
        return {
          ...state,
          showDeleteUsersListDialog
        };
      case SET_DELETE_USER_DIALOG:
        const showDeleteUserDialog = action.payload;
        return {
          ...state,
          showDeleteUserDialog
        };
      default:
        return state;
    }
  };
  export default dialogReducer;
  