import React, { Component } from "react";
import { withAuthorization } from "../../../../Session";
import {
  Segment,
  Item,
  Icon,
  Modal,
  Form,
  Input,
  TextArea,
  List,
  Button
} from "semantic-ui-react";
import firebase from "firebase";
import { stringify } from "querystring";
class Post extends Component {
  state = {
    editModal: false,
    deleteModal: false,
    title: "",
    comments: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  openEditModal = () => {
    this.setState({
      editModal: true
    });
  };

  closeEditModal = () => {
    this.setState({
      editModal: false
    });
  };

  openDeleteModal = () => {
    this.setState({
      deleteModal: true
    })
  }
  
  closeDeleteModal = () => {
    this.setState({
      deleteModal: false
    })
  }

  updatePost = (formData,postId) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(
      postId,
      this.state.title,
      this.state.comments,
      this.props.cityId,
      this.state.timeStamp
    );
    console.log(formData);
    firebase
      .database()
      .ref(`post/${postId}`)
      .update({
        title: this.state.title,
        comments: this.state.comments,
        cityId: this.props.cityId,
        timeStamp: this.state.timeStamp
      });
    this.closeEditModal();
  };

  deletePost = postId => e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(postId);
    firebase
      .database()
      .ref(`post/${postId}`)
      .remove();
    this.closeDeleteModal();
  };
  
  render () {
    const { title, comments } = this.state;
    const isEnabled = title.length > 0 && comments.length > 0;
      return (
          <Segment.Group id={this.props.postId}>
            <Segment>
              <Item.Group>
                <Item>
                  <Item.Image
                    size="tiny"
                    circular
                    src="https://randomuser.me/api/portraits/women/42.jpg"
                  />
                  <Item.Content>
                    <Item.Header as="a">{this.props.title}</Item.Header>
                    <Item.Description>
                      Posted by <a> {this.props.author}</a>
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
            <Segment>
              <span>
                <Icon name="clock" /> {this.props.timeStamp}|
                <Icon name="marker" />
                {this.props.cityId}
              </span>
            </Segment>
            <Segment secondary>
              <span>
                  {this.props.comments}
              </span>
            </Segment>
            <Segment clearing>

              <Modal
                trigger={
                <Button
                  onClick={this.openDeleteModal}
                  color="red"
                  floated="right">Delete</Button>
                }
                open={this.state.deleteModal}
                onClose={this.closeDeleteModal}
                closeIcon
                >
                <Modal.Header>Delete this post?</Modal.Header>
                <Modal.Content>
                  <h2>{this.props.title}</h2>
                  <h3>{this.props.comments}</h3>
                  <Button
                    onClick={this.deletePost(this.props.postId)}
                    color="red"
                    >Yes
                  </Button>
                  <Button
                    onClick={this.closeDeleteModal}
                    color="grey"
                    >No
                  </Button>
                </Modal.Content>
              </Modal>
            
              <Modal 
                trigger={
                  <Button 
                    onClick={this.openEditModal}
                    color="primary" 
                    floated="right">Edit</Button>
                  }
                open={this.state.editModal}
                onClose={this.closeEditModal}
                closeIcon
                >
                <Modal.Header>Edit Post</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Field
                      control={Input}
                      label="Post Title"
                      value={this.props.title}
                      name='title'
                      onChange={this.handleInput}
                      maxLength={200}
                      minLength={1}
                    />
                    <Form.Field
                      control="textarea"
                      rows="5"
                      control={TextArea}
                      label="Comments"
                      placeholder={this.props.comments}
                      name='comments'
                      onChange={this.handleInput}
                      maxLength={200}
                      minLength={1}
                    />
                    <Button positive type="submit" onClick={this.updatePost(this,this.props.postId)}>
                      Save
                    </Button>
                  </Form>
                </Modal.Content>
              </Modal>

          <Button
            //Opens detailed view of post
            as="a"
            color="teal"
            floated="right"
            content="View"
            disabled={!!isEnabled}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Post);
