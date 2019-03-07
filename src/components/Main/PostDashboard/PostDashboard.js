import React, { Component } from 'react';
import { withAuthorization } from '../../Session';
import './PostDashboard.css';
import PostForm from './PostForm/PostForm';
import PostHeader from './PostHeader/PostHeader';
import PostList from './PostList/PostList';

class PostDashboard extends Component {
    render () {
        return (
            <div id='post-dashboard'>
                <h1>Post Dashboard</h1>
                <PostForm currentCityId={this.props.currentCityId}/>
                <PostHeader />
                <PostList />
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostDashboard);