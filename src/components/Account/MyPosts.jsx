import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import Post from "../Main/PostDashboard/PostList/Post/Post";
import PostList from "../Main/PostDashboard/PostList/PostList";
import PostDashboard from "../Main/PostDashboard/PostDashboard";
import firebase from "firebase";

class MyPosts extends Component {
  render() {
    return (
      <div>
        <Post />
      </div>
    );
  }
}

export default MyPosts;
