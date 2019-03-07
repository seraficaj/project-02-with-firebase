import React, { Component } from 'react';
import { withAuthorization } from '../../Session';

import PostForm from './PostForm/PostForm';
import PostHeader from './PostHeader/PostHeader';
import PostList from './PostList/PostList';
import { withFirebase } from '../../Firebase';

class PostDashboard extends Component {
  render() {
    return (
      <div id="post-dashboard">
        <h1>Post Dashboard</h1>

        <PostHeader />
        <PostForm currentCityId={this.props.currentCityId} />
        <PostList />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withFirebase(PostDashboard);
// export default withAuthorization(condition)(PostDashboard);
