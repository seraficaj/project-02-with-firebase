import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';

class AccountBasic extends Component {
  render() {
    return (
      <Segment>
        <Header dividing size="large" content="Basics" />
        {/* <Card>
          <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
        </Card> */}
        <Form>
          <Form.Field width={8}>
            <input type="text" placeholder="Name" />
          </Form.Field>
          <Form.Group inline>{/* TODO: Gender Radio button */}</Form.Group>
          <Form.Field width={8}>
            <label>Join Date:</label>
            <input type="date" placeholder="Join Date" />
          </Form.Field>
          <Form.Field width={8}>
            <input type="text" placeholder="Current City" />
          </Form.Field>
          <Divider />
          <Button size="large" positive content="Update Profile" />
        </Form>
      </Segment>
    );
  }
}

export default AccountBasic;
