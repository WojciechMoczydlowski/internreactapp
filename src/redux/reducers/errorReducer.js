import {
  HANDLE_NICKAME_ERROR,
  HANDLE_EMAIL_ERROR,
  HANDLE_IPADRESS_ERROR
} from "../actions/types";

const errors = {
  nicknameError:{
    dispay: false,
    message: "",
  },
  emailError:{
    dispay: false,
    message: "",
  },
  ipadressError:{
    dispay: false,
    message: "",
  },
};

const errorReducer = (state = errors, action) => {
  let error;
  switch (action.type) {
    case HANDLE_NICKAME_ERROR:
   error = {display:action.payload.display , message: action.payload.message}
      return {
        ...state,
        nicknameError:error
      };
    case HANDLE_EMAIL_ERROR:
        error  = {display:action.payload.display , message: action.payload.message}
      return {
        ...state,
        emailError:error
      };
    case HANDLE_IPADRESS_ERROR:
        error  = {display:action.payload.display , message: action.payload.message}
      return {
        ...state,
      ipadressError:error
      };
    default:
      return state;
  }
};
export default errorReducer;
