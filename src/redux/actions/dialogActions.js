import {
    SHOW_CONFIRM_DIALOG,
    HANDLE_CONFIRMATION,
  } from "./types";
  
  export const showConfirmDialog = (payload) => ({
    type: SHOW_CONFIRM_DIALOG,
    payload
  });
  
  export const handleConfirmation = (payload) => ({
    type:  HANDLE_CONFIRMATION,
    payload
  });
  