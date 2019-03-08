import React from 'react';

import {
  Container,
  Segment,
  Header,
  Form,
  Divider,
  Label,
  Button,
  Icon,
  Grid
} from 'semantic-ui-react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import SettingsNav from './SettingsNav';
import AccountBasic from './AccountBasic';

const AccountPage = () => (
  <Grid>
    <Grid.Column width={12}>
      <AuthUserContext.Consumer>
        {authUser => (
          <Segment>
            <Header dividing size="large" content="Account" />
            <div>
              <Header color="teal" sub content="Change password" />
              <p>Use this form to update your account settings</p>
              {/* <h3>Account: {authUser.email}</h3> */}
              {/* <Form> */}
              {/* <PasswordForgetForm />

            <Divider /> */}

              <PasswordChangeForm />
              {/* </Form> */}
            </div>
          </Segment>
        )}
      </AuthUserContext.Consumer>
    </Grid.Column>
    <Grid.Column width={4}>
      <SettingsNav />
    </Grid.Column>
  </Grid>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
