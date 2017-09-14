/**
 * Created by rabby on 21/08/2017.
 */
import history from '../History'


const UserDataReducer = (state = {user:{}, userArticles:[]}, action = {}) => {

    switch (action.type){

        case "REGISTER_SUCCESS" :
            return registerSuccess(state,action);

        case "REGISTER_FAILED" :
            return registerFailed(state,action);

        case "LOGIN_SUCCESS" :
            return loginSuccess(state,action);

        case "LOGIN_FAILED" :
            return loginFailed(state,action);

        case "ADD_ARTICLE_SUCCESS" :
            return addArticleSuccess(state,action);

        case "ADD_ARTICLE_FAILED" :
            return addArticleFailed(state,action);


        default:
            return state;
            break;
    }


    function registerSuccess(state, action){

       // var usr = action.data;

        history.push('/signin');
        return {...state};
    }


    function loginSuccess(state, action){
        //var usr = action.data;
        return {...state, user : action.data.user};
    }

    function addArticleSuccess(state,action){
        history.push('/userprofile');
        return {...state};
    }

    function registerFailed(state,action){
        window.alert(action.data.message);
        return state;
    }

    function loginFailed(state,action){
        window.alert(action.data.message);
        return state;
    }

    function addArticleFailed(state,action){
        window.alert(action.data.message);
        return state;
    }


}

export default UserDataReducer;
