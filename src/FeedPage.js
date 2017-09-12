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

        console.log("this is the feed page  componentWillMount....." );
        console.log(this.props.type);
        //this.props.getFeed({"_id":"59b7a4dd394bb461e38e56b2","feed":this.props.type});
    }

    componentWillReceiveProps(nextProps){

       console.log("this is the feed page  componentWillReceiveProps....." );
       console.log(nextProps.type);
       //this.props.getFeed({"_id":"59b7a4dd394bb461e38e56b2","feed":nextProps.type});
    }

    render() {
        return (
           <h1> hii this is a {this.props.type} feed </h1>
        );
    }
}


export default FeedPage;
