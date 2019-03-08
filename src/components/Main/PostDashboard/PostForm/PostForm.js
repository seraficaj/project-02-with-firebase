import React, { Component } from 'react';
import { Input, TextArea, Button, Modal, Form } from 'semantic-ui-react';
import { withAuthorization } from '../../../Session';
import firebase from 'firebase';

class PostForm extends Component {
  testPost = e => {
    debugger;
    e.preventDefault();
    debugger;
    e.stopPropagation();
    debugger;
  };

  render() {
    firebase
      .database()
      .ref('cities/')
      .on('value', function(snap) {
        console.log(snap.val());
      });
    return (
      <Modal trigger={<Button color="primary">New Post</Button>} closeIcon>
        <Modal.Header>Submit a New Post</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field
              control={Input}
              label="Post Title"
              placeholder="Post Title"
            />

            <Form.Field
              control="textarea"
              rows="5"
              control={TextArea}
              label="Comments"
              placeholder="Comments"
            />

            {/* <input type='text' value={this.props.currentCityId} name='cityId' /> */}

            <Button positive type="submit" onSubmit={this.testPost}>
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostForm);
