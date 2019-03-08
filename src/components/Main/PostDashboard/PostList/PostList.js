import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import { withAuthorization } from '../../../Session';
import './PostList.css';
import Post from './Post/Post';
import firebase from 'firebase';

class PostList extends Component {

    render () {
        let posts = [];
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
