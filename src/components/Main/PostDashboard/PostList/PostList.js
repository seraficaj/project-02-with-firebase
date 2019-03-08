import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import { withAuthorization } from "../../../Session";
import Post from "./Post/Post";

class PostList extends Component {
  render() {
    return (
      <div>
        <Post />
        <Post />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostList);
