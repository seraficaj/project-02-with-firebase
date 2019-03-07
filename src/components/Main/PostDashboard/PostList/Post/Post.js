import React, { Component } from 'react';
import { withAuthorization } from '../../../../Session';
import './Post.css'

class Post extends Component {
    render () {
        return (
            <div id='post'>
                <h1>Post</h1>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Post);