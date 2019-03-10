import React, { Component } from 'react';
import { withAuthorization } from '../../../../Session';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import firebase from 'firebase';

class Post extends Component {
  
    // Write edit function
    // Write delete function
    deletePost = (postId) => (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(postId);
        firebase
          .database()
          .ref(`post/${postId}`)
          .remove()        
    }

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
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Post);
