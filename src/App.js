import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SignUpPage  from './SignUpPage';
import SignInPage  from './SignInPage';
import {FeedContainer}  from './FeedContainer';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class App extends Component {

    componentWillReceiveProps(nextProps){

        console.log("next props....");
        console.log(nextProps.userData);

      if(nextProps.userData.login){
        this.props.history.push('/signin');
      }
      if(nextProps.userData.user._id){
        this.props.history.push('/feed');
      }
    }
  render() {
    return (
      <div>
          <Header currentUser = {this.props.userData} appName= {"Thoughts!"}/>
          <Route path = "/signup"  component = {()=>  <SignUpPage  registerUser = {this.props.registerUser}  />} />
          <Route path = "/signin"  component = {()=>  <SignInPage  loginUser = {this.props.loginUser} />} />
          <Route path ="/feed" component ={()=><FeedContainer />}/>
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
        }


    }
}


export const  AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);




















































