import React, { Component } from 'react';
import { withAuthorization } from '../../../../Session';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';

class Post extends Component {
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
            'location'
          </span>
        </Segment>
        <Segment secondary>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            dolorum exercitationem. Incidunt perferendis quasi vero architecto
            corporis dolore quidem harum a earum eaque natus voluptate omnis
            neque aliquam quos facere eveniet nostrum, impedit ipsam error atque
            dicta repellendus, recusandae necessitatibus? Voluptates fuga
            molestias id explicabo eius, vitae, eum minima maiores illo autem
            hic expedita dolor cumque pariatur illum iste harum laborum eveniet,
            aut numquam quidem! Repudiandae ullam iusto ipsum saepe reiciendis
            eligendi, minima ut natus laborum ducimus est corporis aliquam.
            Suscipit aspernatur accusantium officiis libero quae animi veritatis
            voluptatum natus excepturi dolore nam incidunt cum minima cumque
            laborum amet fugit accusamus odit enim eum, praesentium ullam. Quo
            blanditiis iure amet laboriosam a, aliquid odit repudiandae delectus
            nemo ipsum officia, vitae explicabo itaque rerum voluptatibus
            deserunt illo suscipit doloremque totam eum! Voluptatem modi
            dignissimos deleniti. Ut laudantium earum ratione est maiores nemo
            fugiat, reiciendis sequi modi nisi aliquam iste sint facere debitis
            soluta quidem dicta possimus quaerat veritatis quod reprehenderit,
            corrupti necessitatibus consequatur ducimus. Autem perspiciatis qui
            odit! Blanditiis, facere explicabo ea optio error omnis veniam
            repellendus sapiente minus nemo ad, architecto quis, alias vel
            reprehenderit? Numquam esse quisquam facere deserunt, sunt fugit,
            error repellendus, quibusdam vel mollitia eos voluptatibus maiores?
            {this.props.body}
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
            color="grey"
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

      // <Post />
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Post);
