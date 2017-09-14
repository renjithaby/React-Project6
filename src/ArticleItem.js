/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';

class ArticleItem extends React.Component {

    constructor(props){
        super(props);
    }
    componentWillMount(props){

        console.log("this is the feed page  componentWillMount....." );
        console.log(this.props.type);
        //this.props.getFeed({"_id":"59b7a4dd394bb461e38e56b2","feed":this.props.type});
    }

    showUserProfile(){
        this.props.showUserProfile({"_id":this.props.article.author.authorId, "name":this.props.article.author.authorName});
    }



    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div>{ this.props.article.title }</div>
                    <div> { this.props.article.author.authorName }</div>
                    <div onClick = {this.showUserProfile.bind(this)}>{ this.props.article.authorId }  <span> <small> {(new Date(this.props.article.time)).toUTCString()}</small> </span> </div>
                </div>
                <div className="panel-body">{this.props.article.content}</div>
            </div>
        );
    }
}


export default ArticleItem;
