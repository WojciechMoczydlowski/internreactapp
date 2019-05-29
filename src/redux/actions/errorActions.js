import {
  HANDLE_NICKAME_ERROR,
  HANDLE_EMAIL_ERROR,
  HANDLE_IPADRESS_ERROR,
} from "./types";

export const handleNicknameError = (payload) => ({
  type: HANDLE_NICKAME_ERROR,
  payload
});

export const handleEmailError = (payload) => ({
  type: HANDLE_EMAIL_ERROR,
  payload
});

export const handleIpadressError = (payload) => ({
  type: HANDLE_IPADRESS_ERROR,
  payload
});
