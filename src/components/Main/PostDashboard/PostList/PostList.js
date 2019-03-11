import React, { Component } from 'react';
import { withAuthorization } from '../../../Session';
import Post from './Post/Post';
import firebase from 'firebase';

let posts;
class PostList extends Component {

    state = {
        cityPosts: [],
        currentCityId: this.props.currentCityId
    };

    componentDidMount(){
        console.log('PostList componentDidMount triggered');
        let thisKeeper = this
        posts = [];
        firebase
        .database()
        .ref('post')
        .orderByChild('cityId')
        .equalTo(this.props.currentCityId)
        .on('value',function(snap){
            console.log(snap.val());
                snap.forEach((s) => {
                console.log(s.key, s.val().title, s.val().comments, s.val().cityId);
                    posts.push(<Post 
                        postId={s.key} 
                        cityId={s.val().cityId}
                        title={s.val().title}
                        comments={s.val().comments}
                        />)
            });
            thisKeeper.setState({
                cityPosts: posts
            })
        });
    }

    render() {
        posts = [];
        firebase
        .database()
        .ref('post')
        .orderByChild('cityId')
        .equalTo(this.props.currentCityId)
        .on('value',function(snap){
            console.log(snap.val());
                snap.forEach((s) => {
                console.log(s.key, s.val().title, s.val().comments, s.val().cityId);
                    posts.push(<Post 
                        postId={s.key} 
                        cityId={s.val().cityId}
                        title={s.val().title}
                        comments={s.val().comments}
                        />)
            });
        });
        return (
            <div id='post-list'>
                <h1>Post List</h1>
                {posts}
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostList);
