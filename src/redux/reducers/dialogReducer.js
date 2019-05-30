import {
   SHOW_CONFIRM_DIALOG,
   HANDLE_CONFIRMATION,
  } from "../actions/types";
  
  const dialog = {
   show:false,
   confirmation:false,
  };
  
  const dialogReducer = (state = dialog, action) => {
    console.log(action.payload);
    switch (action.type) {
      case SHOW_CONFIRM_DIALOG:
        const show = action.payload;
        return {
          ...state,
          show
        };
      case HANDLE_CONFIRMATION:
        const confirmation = action.payload;
        return {
          ...state,
          confirmation
        };
      default:
        return state;
    }
  };
  export default dialogReducer;
  