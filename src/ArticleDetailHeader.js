/**
 * Created by rabby on 14/09/2017.
 */

import React from 'react';
import ArticleItem from './ArticleItem';

class ArticleDetailHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {};

    }
    componentWillMount(props){
        console.log("component will mount...");
        console.log(this.props);
    }






    render() {
        return (
            <div className="jumbotron text-center">
                <h4>{this.props.article.title}</h4>

                <div>
                <span> {this.props.article.author.authorName}</span>
                <span><small> {(new Date(this.props.article.time)).toUTCString()}</small></span>
                </div>

            </div>

        );
    }
}


export default ArticleDetailHeader;