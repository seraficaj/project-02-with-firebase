import React, { Component } from 'react';
import { withAuthorization } from '../../Session';
import { Header, Divider } from 'semantic-ui-react';
import PostForm from './PostForm/PostForm';
import PostHeader from './PostHeader/PostHeader';
import PostList from './PostList/PostList';

class PostDashboard extends Component {
  render() {
    return (
      <div id="post-dashboard">
        <Header as="h2" attached="top">
          Post Dashboard
        </Header>
        <PostHeader />
        <PostForm
          currentCityId={this.props.currentCityId}
          handleInput={this.props.handleInput}
        />

        <PostList
          currentCityId={this.props.currentCityId}
          posts={this.props.posts}
        />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostDashboard);
