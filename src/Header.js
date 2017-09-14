/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const LoggedOutView = props => {
        return (
            <div>

            <ul className="nav navbar-nav pull-xs-right">

                <li className="nav-item">
                    <Link to="/feed" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="signin" className="nav-link">
                        Sign in
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="signup" className="nav-link">
                        Sign up
                    </Link>
                </li>

            </ul>

           </div>
        );
};


const LoggedInView = props => {
        return (
            <div>

                <ul className="nav navbar-nav pull-xs-right">

                    <li className="nav-item">
                        <Link to="/feed" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="newpost" className="nav-link">
                            New Post
                        </Link>
                    </li>

                    <li onClick ={props.showUserProfile.bind(this)} className="nav-item">
                        <Link to=""  className="nav-link">
                            {props.currentUser.username}
                        </Link>
                    </li>



                </ul>

            </div>
        );
};

class Header extends React.Component {

    showUserProfile(){
        this.props.showUserProfile({"_id":this.props.currentUser._id, "name":this.props.currentUser.username});
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">

                    <Link to="/" className="navbar-brand">
                        {this.props.appName}
                    </Link>

                {!this.props.currentUser._id? <LoggedOutView currentUser={this.props.currentUser} appName ={this.props.appName}/>:null}
                {this.props.currentUser._id? <LoggedInView showUserProfile = {this.showUserProfile.bind(this)} currentUser={this.props.currentUser} appName ={this.props.appName}/>:null}

                </div>
            </nav>
        );
    }
}


/*  <!--  <img src={logo} className="App-logo" alt="logo" /> --> */
export default Header;