import React, { Component } from 'react';
import { withAuthorization } from '../../../../Session';
import './Post.css'

class Post extends Component {

    // Write edit function
    // Write delete function
    deletePost = (e) => {
        e.preventDefault();
        
    }

    render () {
        return (
            <div id={this.props.postId}>
                <h2>{this.props.title}</h2>
                <h3>{this.props.cityId}</h3>
                <p>{this.props.comments}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Post);