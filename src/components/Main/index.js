import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import './main.css';
import Cities from './Cities/Cities';
import PostDashboard from './PostDashboard/PostDashboard';

class Main extends Component {
  render() {
    return (
  <div id='main'>
    <Cities />
    <PostDashboard />
  </div>
    )
  }
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Main);