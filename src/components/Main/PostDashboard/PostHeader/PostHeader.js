import React, { Component } from 'react';
import { withAuthorization } from '../../../Session';
import './PostHeader.css'

class PostHeader extends Component {
    render () {
        return (
            <div id='post-header'>
                <h1>Post Header</h1>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostHeader);