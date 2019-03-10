import React, { Component } from 'react';
import { withAuthorization, AuthUserContext } from '../../../../Session';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';

class Post extends Component {
  
    // Write edit function
    // Write delete function
    deletePost = (e) => {
        e.preventDefault();
        
    }

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
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Post);
