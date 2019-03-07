import React, { Component } from 'react';
import { withAuthorization } from '../../../Session';
import firebase from 'firebase';


class PostForm extends Component {
        
    

    testPost = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let postdb = firebase.database().ref('post/');
        console.log(this.state.title, this.state.comments, this.cityId);
        let newPostId = postdb.push().key;
        console.log(newPostId);
        firebase.database().ref(`post/${newPostId}`).update({title: this.state.title,
                                                            comments: this.state.comments,
                                                            cityId: this.props.currentCityId});
        // postdb.push().set({title: this.state.title, 
        //             comments: this.state.comments, 
        //             cityId: this.cityId});
        // console.log(postdb.push().key);
    }
    handleInput = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
          });
    }

    render () {

        firebase.database().ref('cities/').on('value',function(snap){
            console.log(snap.val())
        });
        return (
            <div>
                <form>
                    <input type='text' placeholder='Title' name='title' onChange={this.handleInput}/>
                    <input type='text' placeholder='Comments' name='comments' onChange={this.handleInput}/>
                    <button type="submit" onClick={this.testPost}>Submit</button>
                </form>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PostForm);