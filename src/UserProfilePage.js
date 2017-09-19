/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import ArticleItem from './ArticleItem';
import UserProfileHeader from './UserProfileHeader';

class UserProfilePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillMount(props){
        console.log("component will mount  UserProfilePage.......");
        var loggedInUser  = true,follow = true,showFollow = false;
        if(this.props.loggedInUser.following){
            showFollow = true;
        }
       if(this.props.loggedInUser._id !== this.props.profileUser._id ){
           if(showFollow && this.props.loggedInUser.following.length>0)
           {
               if(this.props.loggedInUser.following.find(author => author.authorId === this.props.profileUser._id)){
                    follow  = false;
               }
           }
            loggedInUser = false;
       }
       this.setState({follow:follow,loggedInUser :loggedInUser,showFollow:showFollow});
        //this.props.getUserArticles(this.props.currentUser._id);//
    }


    addFollowing(){
        this.props.addFollowing({userid :this.props.loggedInUser._id, authorid :this.props.profileUser._id});
    }

    removeFollowing(){
         this.props.removeFollowing({userid :this.props.loggedInUser._id, authorid :this.props.profileUser._id});
    }


    render() {
        return (
            <div>
                <UserProfileHeader  profileState = {this.state}  profileUser = {this.props.profileUser} addFollowing = {this.addFollowing.bind(this)}
                removeFollowing = {this.removeFollowing.bind(this)} />
                <div className ="container">
                    <ul>
                        {this.props.userArticles.map((item) =>
                             <ArticleItem  key ={item._id} article = {item}
                                 showUserProfile = {this.props.showUserProfile.bind(this)}
                                 isArticleLiked = {this.props.isArticleLiked.bind(this)}
                                 handleLikes =   {this.props.handleLikes.bind(this)}
                                 showArticle = {this.props.showArticle.bind(this)}
                                 isUserLoggedIn = {this.props.isUserLoggedIn}
                             />
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}


export default UserProfilePage;
