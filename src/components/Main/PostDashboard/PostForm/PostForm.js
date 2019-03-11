import React, { Component } from 'react';
import { Input, TextArea, Button, Modal, Form } from 'semantic-ui-react';
import { withAuthorization } from '../../../Session';
import firebase from 'firebase';

class PostForm extends Component {
  state = {
    title: '',
    comments: '',
    postModal: false
  };

  openPostModal = () => {
    this.setState({
      postModal: true
    })
  }

  closePostModal = () => {
    this.setState({
      postModal: false
    })
  }

  createPost = e => {
    e.preventDefault();
    e.stopPropagation();
    let postdb = firebase.database().ref('post/');
    let newPostId = postdb.push().key;
    firebase
      .database()
      .ref(`post/${newPostId}`)
      .update({
        title: this.state.title,
        comments: this.state.comments,
        cityId: this.props.currentCityId
      });
    this.closePostModal();
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { title, comments } = this.state;
    const isEnabled = title.length > 0 && comments.length > 0;
    return (
      <Modal 
        trigger={
          <Button 
            onClick={this.openPostModal} 
            color="green">
            New Post</Button>
          } 
        open={this.state.postModal}
        onClose={this.closePostModal}
        closeIcon>
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
              maxLength={200}
              minLength={1}
            />

            <Form.Field
              control="textarea"
              rows="3"
              control={TextArea}
              label="Comments"
              placeholder="(maximum 200 characters)"
              name="comments"
              onChange={this.handleInput}
              //value={this.state.comments}
              maxLength={200}
              minLength={1}
            />

            <Form.Button
              positive
              type="submit"
              onClick={this.createPost}
              disabled={!isEnabled}
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
