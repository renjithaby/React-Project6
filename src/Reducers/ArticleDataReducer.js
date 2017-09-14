/**
 * Created by rabby on 12/09/2017.
 */
const ArticleDataReducer = (state = {globalFeed:[],yourFeed:[], userArticles:[]}, action = {}) => {

	switch (action.type){

		case "GLOBAL_FEED_SUCCESS" :
		    return getGlobalFeedSuccess(state,action);

		case "GLOBAL_FEED_FAILED" :
		    return getGlobalFeedFailed(state,action);

		case "YOUR_FEED_SUCCESS" :
		    return getYourFeedSuccess(state,action);

		case "YOUR_FEED_FAILED" :
		    return getYourFeedFailed(state,action);

        case "GET_USER_ARTICLE_SUCCESS":
            return getUserArticleSuccess(state,action);

        case "GET_USER_ARTICLE_FAILED":
            return getUserArticleFailed(state,action);

		default:
		    return state;
		    break;
	}



	function getGlobalFeedSuccess(state, action){

		return {...state,globalFeed:action.data};
	}


	function getGlobalFeedFailed(state, action){
	//var usr = action.data;
		return {...state};
	}

	function getYourFeedSuccess(){
		return {...state, yourFeed:action.data};
	}

	function getYourFeedFailed(){
		return {...state};
	}

    function getUserArticleSuccess(state,action){
        return  {...state, userArticles:action.data};
    }

    function getUserArticleFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }



}

export default ArticleDataReducer;
