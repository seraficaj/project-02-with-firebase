import React, { Component } from 'react';
import { withAuthorization } from '../../Session';

class Cities extends Component {
  setCity = e => {
    e.preventDefault();
    this.props.setCity(e);
  };

  render() {
    return (
      <div id="cities">
        <h1>Cities</h1>
        <ul>
          <li>
            <a href="" name="san-francisco" onClick={this.setCity}>
              San Francisco
            </a>
          </li>
          <li>
            <a href="" name="london" onClick={this.setCity}>
              London
            </a>
          </li>
          <li>
            <a href="" name="gibraltar" onClick={this.setCity}>
              Gibraltar
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Cities);
