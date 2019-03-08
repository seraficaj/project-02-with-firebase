import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import { withAuthorization } from "../../../Session";
import Post from "./Post/Post";
import Grid from "semantic-ui-react";

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
const postsDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    event: "Tower of London, St Katharine's & Wapping, London",
    postedBy: "Bob",
    posterPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    likedBy: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    event: "Punch & Judy, Henrietta Street, London, UK",
    postedBy: "Tom",
    posterPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    likedBy: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class PostDashboard extends Component {
  state = {
    events: postsDashboard,
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreatePost = newPost => {
    newPost.id = cuid();
    newPost.PhotoURL = "/assets/user.png";
    const updatedPosts = [...this.state.events, newPost];
    this.setState({
      posts: updatedPosts,
      isOpen: false
    });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <PostList posts={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleFormOpen} positive content="New Post" />
          {this.state.isOpen && (
            <PostForm
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default withAuthorization(condition)(PostList);
