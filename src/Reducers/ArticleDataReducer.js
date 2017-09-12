/**
 * Created by rabby on 12/09/2017.
 */
const ArticleDataReducer = (state = {globalFeed:{},yourFeed:{}}, action = {}) => {

	switch (action.type){

		case "GLOBAL_FEED_SUCCESS" :
		    return getGlobalFeedSuccess(state,action);

		case "GLOBAL_FEED_FAILED" :
		    return getGlobalFeedFailed(state,action);

		case "YOUR_FEED_SUCCESS" :
		    return getYourFeedSuccess(state,action);

		case "YOUR_FEED_FAILED" :
		    return getYourFeedFailed(state,action);

		default:
		    return state;
		    break;
	}


	function getGlobalFeedSuccess(state, action){

	// var usr = action.data;
		console.log("global feed action data");
		console.log(action.data);
		return {...state,globalFeed:action.data};
	}


	function getGlobalFeedFailed(state, action){
	//var usr = action.data;
		return {...state};// user:action.data.user};
	}

	function getYourFeedSuccess(){
		return {...state,yourFeed:action.data};
	}

	function getYourFeedFailed(){
		return {...state};
	}


}

export default ArticleDataReducer;
