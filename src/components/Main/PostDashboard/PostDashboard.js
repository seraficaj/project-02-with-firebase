import React, { Component } from 'react';
import { withAuthorization } from '../../Session';
import PostForm from './PostForm/PostForm';
import PostHeader from './PostHeader/PostHeader';
import PostList from './PostList/PostList';

class PostDashboard extends Component {
  render() {
    return (
      <div id="post-dashboard">
        <h1>Post Dashboard</h1>
        <PostForm
          currentCityId={this.props.currentCityId}
          handleInput={this.props.handleInput}
        />
        <PostHeader />
        <PostList
          currentCityId={this.props.currentCityId}
        />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostDashboard);
