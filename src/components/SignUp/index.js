import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Header, Image, Segment, Button, Form, Grid } from 'semantic-ui-react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Firebase from 'firebase';

var selectedFile;

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { photoURL, username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          photoURL,
          username,
          email
        });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.MAIN);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };
  file = event => {
    selectedFile = event.target.files[0];
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // uploadFile = event => {
  //   var storageRef = firebase.storage().ref("/userImages");
  // };
  render() {
    // for prof img

    // end for prof img
    const {
      photoURL,
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="assets/logo.png" /> Sign up now - it's free!
          </Header>
          <Form onSubmit={this.onSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Full Name"
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
              />

              <Button
                disabled={isInvalid}
                type="submit"
                color="teal"
                fluid
                size="large"
              >
                Sign Up
              </Button>
              {error && <p>{error.message}</p>}
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const SignUpLink = () => (
  <p>
    New to us? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };
