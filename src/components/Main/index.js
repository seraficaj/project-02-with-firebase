import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import './main.css';
import Cities from './Cities/Cities';
import PostDashboard from './PostDashboard/PostDashboard';
import firebase from 'firebase';

class Main extends Component {
  state = {
    currentCityId: 'san-francisco',
    posts: []
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

  // componentDidMount() {
  //   function convertToArray(snap) {
  //     snap.forEach(function(childSnapshot) {
  //         var item = childSnapshot.val();
  //         item.key = childSnapshot.key;

  //         this.state.posts.push(item);
  //     });

  //     return this.state.posts;
  //   }

    // firebase
    // .database()
    // .ref('post')
    // .orderByChild('cityId')
    // .equalTo(this.state.currentCityId)
    // .on('value',function(snap){
    //   console.log(snap.val())
    // });
  // }

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
      posts={this.state.posts}
      handleInput={this.handleInput}
    />
  </div>
    )
  }
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Main);