/**
 * Created by rabby on 14/09/2017.
 */

import React from 'react';
import ArticleItem from './ArticleItem';

class UserProfileHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {};

    }
    componentWillMount(props){
        console.log("component will mount...");
        //this.props.getUserArticles(this.props.currentUser._id);//
    }

    handleFollow(){
        if(this.props.profileState.follow) {
            console.log("clicked handle follow");
            this.props.addFollowing();
        }else{
             console.log("clicked handle  un follow");
            this.props.removeFollowing();
        }
    }




    render() {
        return (
            <div className="jumbotron text-center">
                    <h4>{this.props.profileUser.name}</h4>
                    <h4>{this.props.profileUser._id}</h4>
                    {this.props.profileState.showFollow ? <div>
                    { !this.props.profileState.loggedInUser ? <button className="btn-green" onClick = {this.handleFollow.bind(this)} >{this.props.profileState.follow ?"+follow" :"+unfollow"+this.props.profileUser.name}  </button>:null}
                    </div>:null}
             </div>

        );
    }
}


export default UserProfileHeader;
