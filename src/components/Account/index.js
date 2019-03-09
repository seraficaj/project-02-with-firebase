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
          <div>
            <Header dividing size="large" content="Account" />

            {/* <h3>Account: {authUser.email}</h3> */}
            {/* <Form> */}
            {/* <PasswordForgetForm />

            <Divider /> */}
            <Segment>
              <AccountBasic />
            </Segment>
            <Segment>
              <PasswordChangeForm />
              {/* </Form> */}
            </Segment>
          </div>
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
