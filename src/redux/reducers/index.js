import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import formReducer from './formReducer';
import userListReducer from './userListReducer';

export default combineReducers({
    errors : errorReducer,
    userList: userListReducer,
    form: formReducer,
});