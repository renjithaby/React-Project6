/**
 * Created by rabby on 12/09/2017.
 */
import history from '../History'
const ArticleDataReducer = (state = {globalFeed:[],yourFeed:[], profileUserArticles:[],selectedArticle:{article:{}, comments:[]}}, action = {}) => {

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

        case "SET_SELECTED_ARTICLE":
            return setSelectedArticle(state,action);

        case "GET_COMMENTS_SUCCESS":
            return getArticleCommentsSuccess(state,action);

        case "GET_COMMENTS_FAILED":
            return  getArticleCommentsFailed(state,action);

        case "ADD_COMMENTS_SUCCESS":
            return getArticleCommentsSuccess(state,action);

        case "ADD_COMMENTS_FAILED":
            return  AddCommentsFailed(state,action);
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
        return  {...state, profileUserArticles:action.data};
    }

    function getUserArticleFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }

    function setSelectedArticle(state, action){
        history.push('/article');
        var obj1= {"selectedArticle":{"article":action.data,"comments":[]}};
        return {...state,...obj1};
    }

    function getArticleCommentsSuccess(state,action){

        var  obj1 = {...state.selectedArticle,comments:action.data};
        //console.log(selectedArticle);
        return  {...state, selectedArticle:obj1};
    }

    function getArticleCommentsFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }

    function AddCommentsFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }





}

export default ArticleDataReducer;
