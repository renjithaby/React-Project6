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

    componentWillMount(props){
        console.log("Article Details  ..........component will mount...");



        this.props.getArticleComments(this.props.selectedArticle.article._id);

    }

    componentWillReceiveProps(nextProps){

    }
    addNewComment(comment) {

        this.props.addNewComment({comment: comment,user:{ userid :this.props.userData._id, username:this.props.userData.username}, articleid :this.props.selectedArticle.article._id});

    }

    render() {
        return (
            <div>
            <ArticleDetailHeader article = {this.props.selectedArticle.article}/>
            {this.props.userData._id ? <NewCommentItem  addNewComment = {this.addNewComment.bind(this)} />:null}

                <ul className = "container">

                    {this.props.selectedArticle.comments.map((item) =>
                            <CommentItem key ={item._id} comment = {item}  />

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
        }

    }
}


export const  ArticleDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);
