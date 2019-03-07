import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { Menu, Container, Button } from 'semantic-ui-react';


const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
)

const NavigationAuth = () => (
  <Menu inverted fixed="top">
  <Container>
    <Menu.Item header>
      <img src="assets/logo.png" alt="logo" />
      Slayfarer
    </Menu.Item>
    <Menu.Item name="Posts" />
    <Menu.Item>
      <Button floated="right" positive inverted content="New Post" />
    </Menu.Item>
    <Menu.Item position="right">
      <Button basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Sign Out"
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  </Container>
</Menu>
  // ----original----- //
//   <ul>
//     <li>
//       <Link to={ROUTES.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.MAIN}>Main</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.ACCOUNT}>Account</Link>
//     </li>
//     <li>
//       <SignOutButton />
//     </li>
//   </ul>
// );

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;