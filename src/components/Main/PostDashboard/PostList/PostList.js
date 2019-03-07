import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import { withAuthorization } from '../../../Session';
import Post from './Post/Post';

class PostList extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src="https://randomuser.me/api/portraits/men/20.jpg"
              />
              <Item.Content>
                <Item.Header as="a">{this.props.title}</Item.Header>
                <Item.Description>
                  Posted by <a>{this.props.author}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> 'date'|
            <Icon name="marker" />
            'location'
          </span>
        </Segment>

        <Segment clearing>
          <span>{this.props.body}</span>
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
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>

      // <Post />
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostList);
