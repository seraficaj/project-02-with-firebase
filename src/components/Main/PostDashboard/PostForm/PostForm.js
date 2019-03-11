import React, { Component } from 'react';
import {
  Divider,
  Input,
  TextArea,
  Button,
  Modal,
  Form
} from 'semantic-ui-react';
import { withAuthorization } from '../../../Session';
import firebase from 'firebase';
import { parseTwoDigitYear } from 'moment';

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      comments: ''
    };
  }

  createPost = e => {
    e.preventDefault();
    e.stopPropagation();
    let postdb = firebase.database().ref('post/');
    let newPostId = postdb.push().key;
    //let d = new Date();
    //let timeStamp = d.toDateString();
    //console.log(timeStamp);
    firebase
      .database()
      .ref(`post/${newPostId}`)
      .update({
        title: this.state.title,
        comments: this.state.comments,
        cityId: this.props.currentCityId,
        timeStamp: Date()
      });
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
      <Modal trigger={<Button color="green">New Post</Button>} closeIcon>
        {' '}
        <Divider />
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
