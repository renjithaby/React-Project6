/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import ArticleItem from './ArticleItem';



class FeedPage extends React.Component {

    constructor(props){
        super(props);
    }
    componentWillMount(props){

        console.log("this is the feed page  componentWillMount....." );
        console.log(this.props.type);
        //this.props.getFeed({"_id":"59b7a4dd394bb461e38e56b2","feed":this.props.type});
    }

    componentWillReceiveProps(nextProps){

       console.log("this is the feed page  componentWillReceiveProps....." );
       console.log(nextProps.type);
       //this.props.getFeed({"_id":"59b7a4dd394bb461e38e56b2","feed":nextProps.type});
    }


    render() {
        return (
            <div>
           <h1> hii this is a {this.props.type} feed </h1>
            <div className ="container">
               <ul>
                    {this.props.feed.map((item) =>
                        <ArticleItem key ={item._id} article = {item} showUserProfile = {this.props.showUserProfile.bind(this)}
                            isArticleLiked = {this.props.isArticleLiked.bind(this)}
                            handleLikes =   {this.props.handleLikes.bind(this)}
                            showArticle = {this.props.showArticle.bind(this)}
                        />
                    )}
                </ul>
            </div>
            </div>
         );
    }
}


export default FeedPage;
