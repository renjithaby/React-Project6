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
        console.log("im................ constructor");
       this.state = {currentFeed:"your"};

    }
    componentWillMount(props){
        console.log("component will mount.....");

    }

    componentWillReceiveProps(nextProps){

        console.log("next props....");
        console.log(nextProps.userData);
    }

    setCurrentFeed(name){
        this.setState({currentFeed: name});
    }



    render() {
        return (
            <div>

                <ul className ="nav navbar-nav no-float">
                    <li  className ="nav-item"> <Tab name={"your"}  active ={this.state.currentFeed === "your"?true:false} setCurrentFeed =  {this.setCurrentFeed.bind(this)}/> </li>
                    <li className ="nav-item"><Tab name={"global"}  active ={this.state.currentFeed === "global"?true:false} setCurrentFeed = { this.setCurrentFeed.bind(this)}/></li>
                </ul>
                <div>
                    <FeedPage  type = {this.state.currentFeed}/>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
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


export const  FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed);