/**
 * Created by rabby on 13/08/17.
 */
import { combineReducers } from 'redux';

//import UsersListReducer from './UsersListReducer';
import UserDataReducer from './UserDataReducer';


const AppReducer = combineReducers({

    userData  : UserDataReducer
});

export default AppReducer;