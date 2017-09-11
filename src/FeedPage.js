/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';




class FeedPage extends React.Component {

    constructor(props){
        super(props);
    }
    componentWillMount(props){

        console.log("this.props.type....");
        console.log(this.props.type);
    }

    componentWillReceiveProps(nextProps){

        console.log("next props....");
        console.log(nextProps.userData);
    }

    render() {
        return (
           <h1> hii this is a {this.props.type} feed </h1>
        );
    }
}


export default FeedPage;
