import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import Cities from './Cities/Cities';
import PostDashboard from './PostDashboard/PostDashboard';
import firebase from 'firebase';

class Main extends Component {
  state = {
    currentCityId: 'san-francisco',
    posts: []
  }


  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setCity = e => {
    e.preventDefault();
    console.log(e.target.name);
    this.setState({
      currentCityId: e.target.name
    });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={6}>
          <Cities
            setCity={this.setCity}
            currentCityId={this.state.currentCityId}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <PostDashboard currentCityId={this.state.currentCityId} />
        </Grid.Column>
      </Grid>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Main);
