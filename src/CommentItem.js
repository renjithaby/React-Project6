/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';

class CommentItem extends React.Component {

    constructor(props){
        super(props);
        // this.state.liked = false;
    }
    componentWillMount(props){

        console.log("this is the feed page  componentWillMount....." );
        console.log(this.props.type);

        //this.props.getFeed({"_id":"59b7a4dd394bb461e38e56b2","feed":this.props.type});
    }

    removeComment(){
        console.log(this.props.comment._id);
        this.props.removeComment(this.props.comment._id);
    }



    render() {
        return (
            <div className="panel panel-default">

                <div className="panel-heading">
                    <div> {this.props.comment.userid} </div>
                { this.props.loggedInUser._id === this.props.comment.user.userid ?<i  onClick = {this.removeComment.bind(this)} className="bin-icon fa fa-trash-o" aria-hidden="true"></i>:null}
                    <span><small> {(new Date(this.props.comment.time)).toUTCString()}</small></span>
                </div>
                <div className="panel-body">
                    {this.props.comment.comment}
                </div>

            </div>
        );
    }
}


export default CommentItem;
