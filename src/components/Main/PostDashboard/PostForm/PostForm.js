import React, { Component } from "react";
import { Input, TextArea, Button, Modal, Form } from "semantic-ui-react";
import { withAuthorization } from "../../../Session";
import firebase from "firebase";

class PostForm extends Component {
  createPost = e => {
    e.preventDefault();
    e.stopPropagation();
    let postdb = firebase.database().ref("post/");
    let newPostId = postdb.push().key;
    firebase
      .database()
      .ref(`post/${newPostId}`)
      .update({
        title: this.state.title,
        comments: this.state.comments,
        cityId: this.props.currentCityId
      });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    //const { title, comments, error } = this.state;
    // const isInvalid = title === "" || comments === "";
    return (
      <Modal trigger={<Button color="primary">New Post</Button>} closeIcon>
        <Modal.Header>Submit a New Post</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field
              control={Input}
              label="Post Title"
              placeholder="Post Title"
              name="title"
              onChange={this.handleInput}
              //value={this.state.title}
              maxlength={10}
            />

            <Form.Field
              control="textarea"
              rows="5"
              control={TextArea}
              label="Comments"
              placeholder="Comments"
              name="comments"
              onChange={this.handleInput}
              //value={this.state.comments}
              maxlength={400}
            />

            <Form.Button
              positive
              type="submit"
              onClick={this.createPost}
              //disabled={!this.state.comments}
              fluid
              size="large"
            >
              Submit
            </Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostForm);
