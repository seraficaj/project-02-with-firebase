import React from 'react';

import {
  Segment,
  Header,
  Form,
  Divider,
  Label,
  Button,
  Icon
} from 'semantic-ui-react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Segment>
        <Header dividing size="large" content="Account" />
        <div>
          <Header color="teal" sub content="Change password" />
          <p>Use this form to update your account settings</p>
          {/* <h3>Account: {authUser.email}</h3> */}
          <Form>
            {/* <PasswordForgetForm />

            <Divider /> */}
            <PasswordChangeForm />
          </Form>
        </div>
      </Segment>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
