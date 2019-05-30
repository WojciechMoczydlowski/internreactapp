import { ADD_USER, DELETE_USER, DELETE_USER_LIST } from "../actions/types";
import {
  SORT_BY_NICKNAME,
  SORT_BY_EMAIL,
  SORT_BY_IPADRESS
} from "../actions/types";

const users = {
  usersArr: []
};

const userListReducer = (state = users, action) => {
  let usersArr;
  let sortedArr;
  let newUsersArr;
  switch (action.type) {
    case ADD_USER:
      const user = {
        nickname: action.payload.nickname,
        email: action.payload.email,
        ipadress: action.payload.ipadress
      };
      newUsersArr = [...state.usersArr, user];
      return {
        ...state,
        usersArr: newUsersArr
      };
    case DELETE_USER:
      const nicknameToDelete = action.payload;
      usersArr = state.usersArr;
      const  filterUsers =(user)=> {
          console.log(user.nickname, nicknameToDelete);
          return nicknameToDelete !== user.nickname;
        }
      newUsersArr = usersArr.slice(0).filter(filterUsers);
      console.log( newUsersArr );
      return {
        ...state,
        usersArr:newUsersArr
      };
    case DELETE_USER_LIST:
      const emptyArr = [];
      return {
        ...state,
        usersArr: emptyArr
      };
    case SORT_BY_NICKNAME:
      usersArr = state.usersArr;
      sortedArr = usersArr.slice(0).sort(function(a, b) {
        return a.nickname < b.nickname ? -1 : a.nickname > b.nickname ? 1 : 0;
      });
      return {
        ...state,
        usersArr: sortedArr
      };
    case SORT_BY_EMAIL:
      usersArr = state.usersArr;
      sortedArr = usersArr.slice(0).sort(function(a, b) {
        return a.email < b.email ? -1 : a.email > b.email ? 1 : 0;
      });
      return {
        ...state,
        usersArr: sortedArr
      };
    case SORT_BY_IPADRESS:
      usersArr = state.usersArr;
      sortedArr = usersArr.slice(0).sort(function(a, b) {
        return a.ipadress < b.ipadress ? -1 : a.ipadress > b.ipadress ? 1 : 0;
      });
      return {
        ...state,
        usersArr: sortedArr
      };
    default:
      return state;
  }
};
export default userListReducer;
