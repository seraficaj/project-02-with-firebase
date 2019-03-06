import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

class Post extends Component {
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>

        )
    }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Post);