<<<<<<< HEAD
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.css";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import { Menu, Container, Button } from "semantic-ui-react";
=======
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Image, Dropdown, Menu, Container, Button } from 'semantic-ui-react';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
>>>>>>> 2e066d951652ed030c9b8fe183983767ee0c894e

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

<<<<<<< HEAD
const NavigationAuth = () => (
  <Menu inverted fixed="top">
    <Container>
      <Menu.Item header>
        <img src="assets/logo.png" alt="logo" />
        Slayfarer
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to={ROUTES.LANDING}>Landing</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={ROUTES.MAIN}>Main</Link>
      </Menu.Item>
      {/* <Menu.Item name="Posts" /> */}
      {/* <Menu.Item>
        <Button floated="right" positive inverted content="New Post" />
      </Menu.Item> */}
      <Menu.Item>
        {" "}
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </Menu.Item>
      <Menu.Item position="right">
        {/* <Button basic inverted content="Login" />
        <Button
          basic
          inverted
          content="Sign Out"
          style={{ marginLeft: "0.5em" }}
        /> */}
        <SignOutButton />
      </Menu.Item>
    </Container>
  </Menu>
  // ----original----- //
  // <ul>
  //   <li>
  //     <Link to={ROUTES.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.MAIN}>Main</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.ACCOUNT}>Account</Link>
  //   </li>
  //   <li>
  //     <SignOutButton />
  //   </li>
  // </ul>
);

const NavigationNonAuth = () => (
  // <ul>
  //   <li>

  <Menu inverted fixed="top">
    <Container>
      <Menu.Item header>
        <img src="assets/logo.png" alt="logo" />
        Slayfarer
      </Menu.Item>
      <Menu.Item>
        <Link to={ROUTES.LANDING}>Landing</Link>
        {/* </Container> </li> */}
        {/* <li> */}
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        {/* </li>
  </ul> */}
      </Menu.Item>
    </Container>
  </Menu>
);

export default Navigation;
=======
const NavigationAuth = ({ firebase }) => (
  <Menu inverted fixed="top">
    <Container>
      <Menu.Item as={Link} to={ROUTES.LANDING} header>
        <img src="/assets/logo.png" alt="logo" />
        Slayfarer
      </Menu.Item>
      <Menu.Item as={NavLink} to={ROUTES.MAIN} name="Main" />
      <Menu.Item as={NavLink} to={ROUTES.ACCOUNT} name="Account" />
    </Container>
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Username">
        <Dropdown.Menu>
          <Dropdown.Item text="New Post" icon="plus" />
          <Dropdown.Item text="My Posts" icon="calendar" />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item
            as={Link}
            to="/settings"
            text="Settings"
            icon="settings"
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
    <Menu.Item position="right">
      <Button basic inverted content="Login">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </Button>
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: '0.5em' }}
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
>>>>>>> 2e066d951652ed030c9b8fe183983767ee0c894e
