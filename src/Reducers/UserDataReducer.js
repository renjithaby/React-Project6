/**
 * Created by rabby on 21/08/2017.
 */
const UserDataReducer = (state = {}, action = {user:{}}) => {

    switch (action.type){

        case "REGISTER_SUCCESS" :
            return registerSuccess(state,action);

      /*  case "REGISTER_FAILED" :
            return registerFailed(state,action);
        */
        case "LOGIN_SUCCESS" :
            return loginSuccess(state,action);

    /*    case "LOGIN_FAILED" :
            return loginFailed(state,action);
*/
        default:
            return state;
            break;
    }


    function registerSuccess(state, action){
        var usr = action.data;
        return {...state, user:usr};
    }


    function loginSuccess(state, action){
        var usr = action.data;
        return {...state, user:usr};
    }

   /* function registerFailed(){

    }

    function loginSuccess(){

    }

    function loginFailed(){


    }*/

}

export default UserDataReducer;
