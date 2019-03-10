import React, { Component } from 'react';
<<<<<<< HEAD
import { withAuthorization, AuthUserContext } from '../../../../Session';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
||||||| merged common ancestors
import { withAuthorization } from '../../../../Session';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
=======
import { withAuthorization } from '../../../../Session';
import { Segment, Item, Icon, Modal, Form, Input, TextArea, List, Button } from 'semantic-ui-react';
import firebase from 'firebase';
>>>>>>> 0011ae6c0589bc85d6be57c9dac06ee0ffbab6ad

class Post extends Component {

<<<<<<< HEAD
    render () {
        return (
          <AuthUserContext.consumer>
            {authUser => ( 
            <Segment.Group id={this.props.postId}>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image
                      size="tiny"
                      circular
                      src="https://randomuser.me/api/portraits/women/42.jpg"
||||||| merged common ancestors
    render () {
        return (
            <Segment.Group id={this.props.postId}>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image
                      size="tiny"
                      circular
                      src="https://randomuser.me/api/portraits/women/42.jpg"
=======
  // state = {
  //   modalState: 'false'
  // }

  handleInput = (e) => {
    this.setState({ 
        [e.target.name]: e.target.value 
      }); 
  }

  // setModalState = (setting) => {
  //   this.setState({
  //     modalState: setting
  //   })
  // }

  createPost = (e) => {
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
  }

  updatePost = (formData,postId) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(postId, this.state.title, this.state.comments, this.props.cityId);
    console.log(formData)
    firebase
      .database()
      .ref(`post/${postId}`)
      .update({
        title: this.state.title,
        comments: this.state.comments,
        cityId: this.props.cityId
      })
    // this.setModalState(false);        
  }

  deletePost = (postId) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(postId);
    firebase
      .database()
      .ref(`post/${postId}`)
      .remove()        
  }

  render () {
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
                <Icon name="clock" /> 'date'|
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
              <Button
                onClick={this.deletePost(this.props.postId)}
                as="a"
                color="red"
                floated="right"
                content="Delete"
              />
              <Modal trigger={<Button color="primary" floated="right">Edit</Button>} closeIcon>
                <Modal.Header>Edit Post</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Field
                      control={Input}
                      label="Post Title"
                      value={this.props.title}
                      name='title'
                      onChange={this.handleInput}
                    />
                    <Form.Field
                      control="textarea"
                      rows="5"
                      control={TextArea}
                      label="Comments"
                      placeholder={this.props.comments}
                      name='comments'
                      onChange={this.handleInput}
>>>>>>> 0011ae6c0589bc85d6be57c9dac06ee0ffbab6ad
                    />
<<<<<<< HEAD
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
                  <Icon name="clock" /> 'date'|
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
                <Button
                  // onClick={deletePost(this.id)}
                  as="a"
                  color="red"
                  floated="right"
                  content="Delete"
                />
                <Button
                  // onClick={onPostOpen(event)}
                  as="a"
                  floated="right"
                  content="Edit"
                />
                <Button
                  //Opens detailed view of post
                  as="a"
                  color="teal"
                  floated="right"
                  content="View"
                />
              </Segment>
            </Segment.Group>
          )}
          </AuthUserContext.consumer>
            
        )
    }
||||||| merged common ancestors
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
                  <Icon name="clock" /> 'date'|
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
                <Button
                  // onClick={deletePost(this.id)}
                  as="a"
                  color="red"
                  floated="right"
                  content="Delete"
                />
                <Button
                  // onClick={onPostOpen(event)}
                  as="a"
                  floated="right"
                  content="Edit"
                />
                <Button
                  //Opens detailed view of post
                  as="a"
                  color="teal"
                  floated="right"
                  content="View"
                />
              </Segment>
            </Segment.Group>
           )
    }
=======
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
              />
            </Segment>
          </Segment.Group>
          )
  }
>>>>>>> 0011ae6c0589bc85d6be57c9dac06ee0ffbab6ad
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Post);
