import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SignUpPage  from './SignUpPage';
import SignInPage  from './SignInPage';
import NewPostPage  from './NewPostPage';
import UserProfilePage  from './UserProfilePage';
import {FeedContainer}  from './FeedContainer';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class UserProfile extends Component {
    constructor(props){
        super(props);

        this.state = {};

    }

    componentWillMount(props){
        console.log("UserProfile  ..........component will mount...");
        this.props.getUserArticles(this.props.userData.user._id);

    }

    render() {
        return (
            <div>
                <UserProfilePage currentUser = {this.props.userData.user} userArticles = {this.props.articleData.userArticles}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(" fetching the statess.....");
    console.log(state);
    return {
        userData: state.userData,
        articleData: state.articleData
    }
}


const mapDispatchToProps = dispatch => {
    return {

       getUserArticles:userid => {
            dispatch(Actions.getUserArticles(userid));
        }

    }
}


export const  UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
