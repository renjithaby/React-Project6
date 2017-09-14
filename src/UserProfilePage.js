/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import ArticleItem from './ArticleItem';

class UserProfilePage extends React.Component {

    constructor(props){
        super(props);
    }
    componentWillMount(props){
        console.log("component will mount...");
        //this.props.getUserArticles(this.props.currentUser._id);//
    }



    render() {
        return (
            <div>
                <h1> hii this is  {this.props.currentUser.username} profile page </h1>
                <div className ="container">
                    <ul>
                        {this.props.userArticles.map((item) =>
                             <ArticleItem  key ={item._id} article = {item} />
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}


export default UserProfilePage;
