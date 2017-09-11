/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';





class Tab extends React.Component {

    constructor(props){
        super(props);
        this.state ={};
    }
    componentWillMount(props){

        console.log("this.props.type....");
        console.log(this.props.type);
        this.setState({active:this.props.active});
    }

    componentWillReceiveProps(nextProps){

        console.log("next props....");
        console.log(nextProps.userData);
    }

    setTabActive(event){
        this.setState({active:!this.props.active});
        this.props.setCurrentFeed(this.props.name);
    }

    render() {
        return (
        <a className="nav-link" className = {this.props.active?"tab-active":"tab-inactive"} onClick ={this.setTabActive.bind(this)}>{this.props.name}</a>
        );
    }
}


export default Tab;

