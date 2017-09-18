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



    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div> {this.props.comment.userid} </div>
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
