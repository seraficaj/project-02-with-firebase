import React, { Component } from 'react';
import { withAuthorization } from '../../../Session';
import './PostList.css';
import Post from './Post/Post'

class PostList extends Component {
    render () {
        return (
            <div id='post-list'>
                <h1>Post List</h1>
                <Post />
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostList);