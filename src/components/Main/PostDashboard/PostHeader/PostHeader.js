import React, { Component } from 'react';
import { Segment, Item } from 'semantic-ui-react';
import { withAuthorization } from '../../../Session';
import './PostHeader.css';

class PostHeader extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item>
            <Item.Image size="massive" src="/assets/SF.jpg" />
          </Item>
        </Segment>
      </Segment.Group>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostHeader);
