import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SignUpPage  from './SignUpPage';
import SignInPage  from './SignInPage';
import NewPostPage  from './NewPostPage';
import {UserProfileContainer}  from './UserProfileContainer';
import {FeedContainer}  from './FeedContainer';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class App extends Component {

    componentWillMount(props){
        console.log("appppppp  ..........component will mount...");
        //this.props.getUserArticles(this.props.currentUser._id);//
    }

    componentWillReceiveProps(nextProps){

        console.log("calling apppppp ");
        console.log(nextProps.userData);

      /*if(nextProps.userData.login){
        this.props.history.push('/signin');
      }*/
      if(nextProps.userData.user && nextProps.userData.user._id){
        //this.props.history.push('/feed');
      }
    }
  render() {
    return (
      <div>
          <Header currentUser = {this.props.userData.user} appName= {"Thoughts!"}  showUserProfile={this.props.showUserProfile.bind(this)}/>
          <Route path = "/signup"  component = {()=>  <SignUpPage  registerUser = {this.props.registerUser}  />} />
          <Route path = "/signin"  component = {()=>  <SignInPage  loginUser = {this.props.loginUser} />} />
          <Route path ="/feed" component ={()=><FeedContainer />}/>
          <Route path ="/newpost" component ={()=><NewPostPage currentUser = {this.props.userData.user} addNewArticle = {this.props.addNewArticle}/>}/>
          <Route path ="/userprofile" component ={()=><UserProfileContainer/> } />

      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(" fetching the statess.....");
    console.log(state);
    return {
        userData: state.userData
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
        addNewArticle:article => {
            dispatch(Actions.addNewArticle(article));
        },
        getUserArticles:userid => {
            dispatch(Actions.getUserArticles(userid));
        },
        showUserProfile: user =>{
             dispatch(Actions.updateProfileUser(user));
        }


    }
}


export const  AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);




















































