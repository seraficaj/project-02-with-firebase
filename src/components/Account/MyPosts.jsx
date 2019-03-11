import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import PostList from "../Main/PostDashboard/PostList/PostList";

class MyPosts extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={12}>
          <PostList />
        </Grid.Column>
        <Grid.Column width={4}>
          <SettingsNav />
        </Grid.Column>
      </Grid>
    );
  }
}

export default MyPosts;
