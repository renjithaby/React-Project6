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

export const registrationFailed = (data) => {
    return {
        type: "REGISTER_FAILED",
        data:data
    };
}

export const loginSuccess = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        data: data
    };
}

export const loginFailed = (data) => {
    return {
        type: "LOGIN_FAILED",
        data:data
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

export const addNewArticleSuccess = (data) => {
    return {
        type:"ADD_ARTICLE_SUCCESS",
        data: data
    };
}

export const addNewArticleFailed = (data) => {
    return {
        type: "ADD_ARTICLE_FAILED",
        data: data

    };
}

export const getUserArticlesSuccess = (data) => {
    return {
        type:"GET_USER_ARTICLE_SUCCESS",
        data: data
    };
}

export const getUserArticlesFailed = (data) => {
    return {
        type: "GET_USER_ARTICLE_FAILED",
        data: data

    };
}

export const updateProfileUser = (data) => {
    return {
        type: "UPDATE_PROFILE_USER",
        data: data

    };
}

export const addFollowingSuccess = (data) => {
    return {
        type: "ADD_FOLLOWING_SUCCESS",
        data: data

    };
}

export const addFollowingFailed = (data) => {
    return {
        type: "ADD_FOLLOWING_FAILED",
        data: data

    };
}

export const removeFollowingSuccess = (data) => {
    return {
        type: "REMOVE_FOLLOWING_SUCCESS",
        data: data

    };
}

export const removeFollowingFailed = (data) => {
    return {
        type: "REMOVE_FOLLOWING_FAILED",
        data: data

    };
}

export const addLikeSuccess = (data) => {
    return {
        type: "ADD_LIKE_SUCCESS",
        data: data
    };
}

export const addLikeFailed = (data) => {
    return {
        type: "ADD_LIKE_FAILED",
        data: data
    };
}
export const removeLikeSuccess = (data) => {
    return {
        type: "REMOVE_LIKE_SUCCESS",
        data: data
    };
}

export const removeLikeFailed = (data) => {
    return {
        type: "REMOVE_LIKE_FAILED",
        data: data
    };
}

export const setSelectedArticle = (data) => {
    return {
        type: "SET_SELECTED_ARTICLE",
        data: data
    };
}
export const getArticleCommentsSuccess = (data) => {
    return {
        type: "GET_COMMENTS_SUCCESS",
        data: data
    };
}

export const getArticleCommentsFailed = (data) => {
    return {
        type: "GET_COMMENTS_FAILED",
        data: data
    };
}

export const addNewCommentSuccess = (data) => {
    return {
        type: "ADD_COMMENTS_SUCCESS",
        data: data
    };
}

export const addNewCommentFailed = (data) => {
    return {
        type: "ADD_COMMENTS_FAILED",
        data: data
    };
}











export function loginUser(usr) {
    return function(dispatch) {
        var resultData = {};
        return dataApi.login(usr).then(data => {
            console.log("....response datat");
            console.log(data);

            if(data.result === "failed"){
                dispatch(loginFailed(data));

            }else {

                resultData.user = data.user;
                dataApi.getUserLikes(resultData.user._id).then(data => {
                    console.log("....user idddddd");
                    console.log(resultData.user._id);
                    if(data.result === "failed"){
                        dispatch(loginFailed(data));
                    }else {
                        resultData.likes = data.likes;
                        dispatch(loginSuccess(resultData));
                    }
                })
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
            if(data.result ==="failed"){
                dispatch(registrationFailed(data));
            }else {
                dispatch(registrationSuccess());
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



export function addNewArticle(article) {
    return function(dispatch) {
        return dataApi.addNewArticle(article).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(addNewArticleSuccess(data.article));
            }else if(data.result ==="failed"){
                dispatch(addNewArticleFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function getUserArticles(userid) {
    return function(dispatch) {
        return dataApi.getUserArticles(userid).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(getUserArticlesSuccess(data.article));
            }else if(data.result ==="failed"){
                dispatch(getUserArticlesFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function addFollowing(data) {
    return function(dispatch) {
        return dataApi.addFollowing(data).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(addFollowingSuccess(data.user));
            }else if(data.result ==="failed"){
                dispatch(addFollowingFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function removeFollowing(data) {
    return function(dispatch) {
        return dataApi.removeFollowing(data).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(removeFollowingSuccess(data.user));
            }else if(data.result ==="failed"){
                dispatch(removeFollowingFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function addLike(data) {
    return function(dispatch) {
        return dataApi.addLike(data).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(addLikeSuccess(data));
            }else if(data.result ==="failed"){
                dispatch(addLikeFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function removeLike(data) {
    return function(dispatch) {
        return dataApi.removeLike(data).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(removeLikeSuccess(data));
            }else if(data.result ==="failed"){
                dispatch(removeLikeFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function getArticleComments(articleid) {
    return function(dispatch) {
        return dataApi.getArticleComments(articleid).then(data => {
            console.log(".... GET ARTICLE COMMENTS ......response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(getArticleCommentsSuccess(data.comments));
            }else if(data.result ==="failed"){
                dispatch(getArticleCommentsFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function addNewComment(commentData) {
    return function(dispatch) {
        return dataApi.addNewComment(commentData).then(data => {
            console.log(".... GET ARTICLE COMMENTS ......response datat");
            console.log(data);
            if(data.result ==="success"){
                dispatch(addNewCommentSuccess(data.comments));
            }else if(data.result ==="failed"){
                dispatch(addNewCommentFailed(data));
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