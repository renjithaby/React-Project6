import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SignUpPage  from './SignUpPage';
import SignInPage  from './SignInPage';
import NewPostPage  from './NewPostPage';
import UserProfilePage  from './UserProfilePage';
import ArticleDetailHeader  from './ArticleDetailHeader';
import CommentItem from './CommentItem';
import NewCommentItem  from './NewCommentItem';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class ArticleDetails extends Component {
    constructor(props){
        super(props);


    }

    /*componentWillMount(props){
        console.log("Article Details  ..........component will mount...");

        var id = "59bf7fedc624ef2c5d93f556";
            this.props.getArticleById(this.props.match.params.id);
            this.props.getArticleComments(this.props.match.params.id);



    } */

    componentDidMount(props){
        console.log("Article Details  ..........component will mount...");

        //var id = "59bf7fedc624ef2c5d93f556";
        this.props.getArticleById(this.props.match.params.id);
        this.props.getArticleComments(this.props.match.params.id);



    }
    componentWillReceiveProps(nextProps){

    }
    addNewComment(comment) {

        this.props.addNewComment({comment: comment,user:{ userid :this.props.userData._id, username:this.props.userData.username}, articleid :this.props.selectedArticle.article._id});

    }

    removeComment(commentid){
        this.props.removeComment({articleid:this.props.selectedArticle.article._id, commentid:commentid});
    }

    render() {
        return (
            <div>
                {this.props.selectedArticle.article._id?<ArticleDetailHeader article = {this.props.selectedArticle.article}/>:null}
                 {this.props.userData._id ? <NewCommentItem  addNewComment = {this.addNewComment.bind(this)} />:null}

                 <ul className = "container">

                 {this.props.selectedArticle.comments.map((item) =>
                 <CommentItem key ={item._id} comment = {item}
                 loggedInUser = {this.props.userData }
                 removeComment = {this.removeComment.bind(this)}
                 />

                 )}
                 </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(" fetching the statess.....");

    return {
        userData: state.userData.user,
        selectedArticle: state.articleData.selectedArticle,
        myprops:state.articleData
    }
}


const mapDispatchToProps = dispatch => {
    return {

        getUserArticles:userid => {
            dispatch(Actions.getUserArticles(userid));
        },
        getArticleComments:articleid => {
            dispatch(Actions.getArticleComments(articleid));
        },
        addNewComment:commentData => {
            dispatch(Actions.addNewComment(commentData));
        },
        removeComment:data => {
            dispatch(Actions.removeComment(data));
        },
        getArticleById:articleid =>{
            dispatch(Actions.getArticleById(articleid));
        }
    }
}


export const  ArticleDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);
