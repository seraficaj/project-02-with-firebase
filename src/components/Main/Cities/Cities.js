import React, { Component } from 'react';
import { withAuthorization } from '../../Session';
import './cities.css'

class Cities extends Component {
    render () {
        return (
            <div id='cities'>
                <h1>Cities</h1>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Cities);