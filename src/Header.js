/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const LoggedOutView = props => {
    console.log(props.currentUser);
    if (props.currentUser) {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            <ul className="nav navbar-nav pull-xs-right">


                <li className="nav-item">
                    <Link to="/home" className="nav-link">
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
    }
    return null;
};

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">

                    <Link to="/" className="navbar-brand">
                        {this.props.appName}
                    </Link>

                    <LoggedOutView currentUser={this.props.currentUser} appName ={this.props.appName}/>


                </div>
            </nav>
        );
    }
}

export default Header;