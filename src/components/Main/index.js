import React, { Component } from 'react';
import { withAuthorization,AuthUserContext } from '../Session';
import Cities from './Cities/Cities';
import PostDashboard from './PostDashboard/PostDashboard';
import firebase from 'firebase';
import {Grid} from 'semantic-ui-react';
import Post from './PostDashboard/PostList/Post/Post';

class Main extends Component {
  state = {
    currentCityId: 'san-francisco',
    currentUserId: <AuthUserContext.Consumer>
                    {authUser => (authUser.uid)}
                  </AuthUserContext.Consumer>
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
  };

  componentDidMount(){
    console.log('Main componentDidMount')
  }


  render() {
    let postDB = firebase.database().ref('post')
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
            <PostDashboard currentCityId={this.state.currentCityId}
            postDB={postDB} />
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
