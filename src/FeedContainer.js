import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FeedPage  from './FeedPage';
import Tab from './Tab';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class Feed extends Component {

    constructor(props){
        super(props);
        console.log("im.calling feed conatiner..... constructor");
        this.state = {currentFeed: "global"};

    }

    componentWillMount(){
        console.log("calling the serCurrent Feeddd............................");
        this.setCurrentFeed("global");
    }

    componentWillReceiveProps(nextProps){

        console.log("next props....");
        console.log(nextProps.userData);
    }

    setCurrentFeed(name){
     console.log("calling the serCurrent Feeddd");
        this.setState({currentFeed: name});
        this.props.getFeed({"_id":this.props.userData.user._id,"feed":name});

    }

    isArticleLiked(articleid){
        var result = this.props.userData.likes.filter(function( obj ) {
            return (obj.articleid === articleid);
        });
        return (result.length > 0);
    }

    handleLikes(articleid){
        if(this.isArticleLiked(articleid)){
            this.props.removeLike({"articleid":articleid,"userid":this.props.userData.user._id});
        }else{
            this.props.addLike({"articleid":articleid,"userid":this.props.userData.user._id});
        }
    }



    render() {
        return (
            <div>

                <ul className ="nav navbar-nav no-float">
                    <li  className ="nav-item"> <Tab name={"your"}  active ={this.state.currentFeed === "your"?true:false} setCurrentFeed =  {this.setCurrentFeed.bind(this)}/> </li>
                    <li className ="nav-item"><Tab name={"global"}  active ={this.state.currentFeed === "global"?true:false} setCurrentFeed = { this.setCurrentFeed.bind(this)}/></li>
                </ul>
                <div>
                    <FeedPage isArticleLiked ={this.isArticleLiked.bind(this)}  type = {this.state.currentFeed} feed = {this.state.currentFeed==="global"?this.props.articleData.globalFeed: this.props.articleData.yourFeed}
                    handleLikes = {this.handleLikes.bind(this)}
                    isUserLoggedIn = {this.props.userData.user._id?true:false}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(" fetching the statess.....");
    console.log(state);
    return {
        articleData: state.articleData,
        userData:state.userData
    }
}


const mapDispatchToProps = dispatch => {
    return {
        registerUser: user => {
            dispatch(Actions.registerUser(user));
        },
        loginUser: user => {
            dispatch(Actions.loginUser(user));
        },
        getFeed: user => {
            if(user.feed === "global") {
                dispatch(Actions.getGlobalFeed());
            }else{
                dispatch(Actions.getYourFeed(user));
            }
        },

        addLike: data =>{
            dispatch(Actions.addLike(data));
        },

        removeLike: data =>{
            dispatch(Actions.removeLike(data));
        }
    }
}


export const  FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed);