/**
 * Created by rabby on 09/08/17.
 */

import dataApi from '../api/dataApi'

export var usersList = [];

export const registrationSuccess = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        data: data
    };
}

export const registrationFailed = () => {
    return {
        type: "REGISTER_FAILED"
    };
}

export const loginSuccess = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        data: data
    };
}

export const loginFailed = () => {
    return {
        type: "LOGIN_FAILED"
    };
}

export const getGlobalFeedSuccess = (data) => {
    return {
        type:"GLOBAL_FEED_SUCCESS",
        data: data
    };
}

export const getGlobalFeedFailed = () => {
    return {
        type: "GLOBAL_FEED_FAILED"
    };
}

export const getYourFeedSuccess = (data) => {
    return {
        type:"YOUR_FEED_SUCCESS",
        data: data
    };
}

export const getYourFeedFailed = () => {
    return {
        type: "YOUR_FEED_FAILED"
    };
}





export function loginUser(usr) {
    return function(dispatch) {

        return dataApi.login(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="failed"){
                dispatch(loginFailed());
            }else {
                dispatch(loginSuccess(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function registerUser(usr) {
    return function(dispatch) {
        return dataApi.register(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(registrationSuccess());
            }else {
                dispatch(registrationFailed());
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function getGlobalFeed() {
    return function(dispatch) {
        return dataApi.getGlobalFeed().then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(getGlobalFeedSuccess(data.article));
            }else {
                dispatch(getGlobalFeedFailed());
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function getYourFeed(usr) {
    return function(dispatch) {
        return dataApi.getYourFeed(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(getYourFeedSuccess(data.article));
            }else {
                dispatch(getYourFeedFailed());
            }
        }).catch(error => {
            throw(error);
        });
    };
}



/*
export function addAddress(usr) {
    return function(dispatch) {
        return dataApi.addAddress(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="failed"){
                dispatch(addAddressFailed());
            }else {
                dispatch(addAddressSuccess(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function updateAddress(usr) {
    return function(dispatch) {
        return dataApi.updateAddress(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="failed"){
                dispatch(updateAddressFailed());
            }else {
                dispatch(updateAddressSuccess(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function deleteAddress(usr) {
    return function(dispatch) {
        return dataApi.deleteAddress(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="failed"){
                dispatch(deleteAddressFailed());
            }else {
                dispatch(deleteAddressSuccess(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}
*/
/*
 export const addTodo = text => {
 return {
 type: 'ADD_TODO',
 id: new Date(),
 text
 };
 }
 export const createTodo = (text) => {
 return {
 type: "CREATE_TODO",
 text
 };
 }

 export const deleteTodo = (id)=>{
 return {
 type :"DELETE_TODO",
 id
 };
 }

 export const updateTodo = (id) => {
 return{
 type: "UPDATE_TODO",
 id
 };
 }

 export const updateTodoFilter = () => {
 return {
 type :"UPDATE_TODO_FILTER"
 };
 }


 //REGISTER_USER
 //LOGIN_USER

 */