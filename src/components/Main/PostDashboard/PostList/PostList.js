import React, { Component } from "react";
import {
  Segment,
  Item,
  Icon,
  List,
  Button,
  Modal,
  Form,
  Input
} from "semantic-ui-react";
import { withAuthorization } from "../../../Session";
import Post from "./Post/Post";
import firebase from "firebase";

class PostList extends Component {
  state = {
    cityPosts: []
  };

  componentDidMount() {
    console.log("PostList componentDidMount triggered");
    let thisKeeper = this;
    let posts = [];
    firebase
      .database()
      .ref("post")
      .orderByChild("cityId")
      .equalTo(this.props.currentCityId)
      .on("value", function(snap) {
        console.log(snap.val());
        snap.forEach(s => {
          console.log(
            s.key,
            s.val().title,
            s.val().comments,
            s.val().cityId,
            s.val().timeStamp
          );
          posts.push(
            <Post
              postId={s.key}
              cityId={s.val().cityId}
              title={s.val().title}
              comments={s.val().comments}
              timeStamp={s.val().timeStamp}
            />
          );
        });
        thisKeeper.setState({
          cityPosts: posts
        });
        console.log(thisKeeper.state.cityPosts);
      });
  }
  render() {
    console.log("PostList render triggered");
    console.log(currentCityId);
    return (
      <div id="post-list">
        <h1>Post List</h1>
        {this.state.cityPosts}
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostList);
