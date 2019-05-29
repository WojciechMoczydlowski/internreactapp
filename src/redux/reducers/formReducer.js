import {
  CHANGE_NICKNAME,
  CHANGE_EMAIL,
  CHANGE_IPADRESS,
} from "../actions/types";

const formDate = {
  nickname: "",
  email: "",
  ipadress: ""
};

const formReducer = (state = formDate, action) => {
  switch (action.type) {
    case CHANGE_NICKNAME:
      return {
        ...state,
        nickname: action.payload
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case CHANGE_IPADRESS:
      return {
        ...state,
        ipadress: action.payload
      };
    default:
      return state;
  }
};
export default formReducer;
