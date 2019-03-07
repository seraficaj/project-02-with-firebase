import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import './main.css';
import firebase from 'firebase/app';
import Cities from './Cities/Cities';
import PostDashboard from './PostDashboard/PostDashboard';

class Main extends Component {
  state = {
    currentCityId: 'san-francisco'
  }

  handleInput = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  setCity = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    this.setState({
      currentCityId: e.target.name
    })
  }

  render() {
    return (
  <div id='main'>
    <h1>Selected City: {this.state.currentCityId}</h1>
    <Cities 
      setCity={this.setCity} 
      currentCityId={this.state.currentCityId}
    />
    <PostDashboard 
      currentCityId={this.state.currentCityId}
    />
  </div>
    )
  }
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Main);