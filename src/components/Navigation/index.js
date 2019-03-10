import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Image, Dropdown, Menu, Container, Button } from 'semantic-ui-react';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ firebase }) => (
  <Menu inverted fixed="top">
    <Container>
      <Menu.Item as={Link} to={ROUTES.LANDING} header>
        <img src="/assets/logo.png" alt="logo" />
        Slayfarer
      </Menu.Item>
      <Menu.Item as={NavLink} to={ROUTES.MAIN} name="Main" />
      {/* <Menu.Item as={NavLink} to={ROUTES.ACCOUNT} name="Account" /> */}
    </Container>

    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Username">
        <Dropdown.Menu>
          <Dropdown.Item text="New Post" icon="plus" />
          <Dropdown.Item
            text="My Posts"
            icon="calendar"
            as={NavLink}
            to={ROUTES.MY_POSTS}
          />
          <Dropdown.Item
            text="My Profile"
            icon="user"
            as={NavLink}
            to={ROUTES.ACCOUNT}
          />

          <Dropdown.Item text="Sign Out" icon="power">
            <SignOutButton />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  </Menu>
);

const NavigationNonAuth = () => (
  <Menu inverted fixed="top">
    <Container>
      <Menu.Item as={Link} to={ROUTES.LANDING} header>
        <img src="/assets/logo.png" alt="logo" />
        Slayfarer
      </Menu.Item>
      <Menu.Item as={NavLink} to={ROUTES.MAIN} name="Main" />
      <Menu.Item as={NavLink} to={ROUTES.ACCOUNT} name="Account" />
    </Container>
    <Menu.Item>
      <Button
        basic
        inverted
        content="Sign In"
        as={NavLink}
        to={ROUTES.SIGN_IN}
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: '0.5em' }}
        as={NavLink}
        to={ROUTES.SIGN_UP}
      />
    </Menu.Item>
  </Menu>
);

//   <ul>
//     <li>
//       <Link to={ROUTES.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//     </li>
//   </ul>
// );

export default withFirebase(Navigation);
