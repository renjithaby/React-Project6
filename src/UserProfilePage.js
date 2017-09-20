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
       var follow = true,showFollow = true;

       if(this.props.loggedInUser._id && this.props.loggedInUser._id !== this.props.profileUser._id ){
           if(this.props.loggedInUser.following && this.props.loggedInUser.following.length>0)
           {
               if(this.props.loggedInUser.following.find(author => author.authorId === this.props.profileUser._id)){
                    follow  = false;
               }
           }
       }else{
           follow = false;
           showFollow = false;
       }
       this.setState({follow:follow,showFollow:showFollow});
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
                                 isArticleLiked = {this.props.isArticleLiked.bind(this)}
                                 handleLikes =   {this.props.handleLikes.bind(this)}
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
