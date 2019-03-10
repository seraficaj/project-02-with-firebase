import React, { Component } from 'react';
import { withAuthorization,AuthUserContext, } from '../Session';
import Cities from './Cities/Cities';
import PostDashboard from './PostDashboard/PostDashboard';
import firebase from 'firebase';
import {Grid} from 'semantic-ui-react';

class Main extends Component {
  state = {
    currentCityId: 'san-francisco',
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setCity = (cityId) => {
    console.log(cityId);
    this.setState({
      currentCityId: cityId
    });
    console.log(this.state.currentCityId);
  };

  render() { 
    return (      
      <AuthUserContext.Consumer>
        {authUser => (
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
        )
        }
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Main);
