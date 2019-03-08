import React, { Component } from 'react';
import { Header, Segment, Item } from 'semantic-ui-react';
import { withAuthorization } from '../../../Session';

class PostHeader extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item>
            <Header as="h2" color="blue" dividing>
              San Francisco, CA
            </Header>
            <Item.Image size="massive" src="/assets/SF2.jpg" />
          </Item>
        </Segment>
      </Segment.Group>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostHeader);
